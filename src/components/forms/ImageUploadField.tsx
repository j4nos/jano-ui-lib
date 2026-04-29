"use client";

import { useId, useRef, useState, type ChangeEvent } from "react";
import { getButtonClassName } from "../Button";

type ImageUploadFieldProps = {
  /** Form field name carrying the resulting public S3 URL on submit. */
  name: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  uploadEndpoint: string;
  uploadBody?: Record<string, string>;
  accept?: string;
  className?: string;
};

type PresignedUploadResponse = {
  uploadUrl: string;
  publicUrl: string;
  key: string;
  contentType: string;
};

export function ImageUploadField({
  name,
  defaultValue,
  value,
  onChange,
  uploadEndpoint,
  uploadBody,
  accept = "image/*",
  className = "",
}: ImageUploadFieldProps) {
  const inputId = useId();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [internalImageUrl, setInternalImageUrl] = useState<string>(
    defaultValue ?? "",
  );
  const [fileName, setFileName] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "uploading" | "uploaded" | "error"
  >(defaultValue ? "uploaded" : "idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const imageUrl = value ?? internalImageUrl;

  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setErrorMessage("");
    setStatus("uploading");

    try {
      if (!uploadEndpoint) {
        throw new Error("Missing upload endpoint.");
      }

      const presignRes = await fetch(uploadEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(uploadBody ?? {}),
          fileName: file.name,
          contentType: file.type,
        }),
      });
      if (!presignRes.ok) {
        const errBody = (await presignRes.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(
          errBody?.error || `Presign failed (${presignRes.status})`,
        );
      }
      const presigned = (await presignRes.json()) as PresignedUploadResponse;

      const putRes = await fetch(presigned.uploadUrl, {
        method: "PUT",
        headers: { "content-type": file.type },
        body: file,
      });
      if (!putRes.ok) {
        throw new Error(`Upload failed (${putRes.status})`);
      }

      if (onChange) {
        onChange(presigned.publicUrl);
      } else {
        setInternalImageUrl(presigned.publicUrl);
      }
      setStatus("uploaded");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Upload failed.",
      );
    }
  }

  const statusText =
    status === "uploading"
      ? `Uploading ${fileName}…`
      : status === "error"
        ? `Upload failed: ${errorMessage}`
        : fileName
          ? fileName
          : imageUrl
            ? "Existing image"
            : "No file selected";

  // Match the bottom margin of the other form fields (FormField defaults to
  // `input-wrapper mb-35`); this component bypasses FormField, so we add it here.
  const wrapperClasses = ["input-wrapper", "mb-35", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapperClasses}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <input type="hidden" name={name} value={imageUrl} />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className={getButtonClassName({ tone: "form", withTopMargin: false })}
        style={{
          flex: "0 0 auto",
          margin: 0,
          cursor: "pointer",
          display: "inline-block",
          color: "#fff",
          fontSize: 16,
          fontWeight: 500,
          letterSpacing: "-0.2px",
          paddingBottom: 0,
          textAlign: "center",
          border: "none",
        }}
        disabled={status === "uploading"}
      >
        {status === "uploading"
          ? "Uploading…"
          : imageUrl
            ? "Replace photo"
            : "Choose photo"}
      </button>
      <span
        style={{
          fontSize: 15,
          color:
            status === "error"
              ? "#c62828"
              : fileName || imageUrl
                ? "#111111"
                : "rgba(0, 0, 0, 0.5)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {statusText}
      </span>
      <input
        ref={fileInputRef}
        id={inputId}
        type="file"
        accept={accept}
        onChange={handleChange}
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      />
    </div>
  );
}
