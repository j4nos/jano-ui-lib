"use client";

type AuthStatusMessageProps = {
  tone: "error" | "info";
  children: string;
};

export function AuthStatusMessage({ tone, children }: AuthStatusMessageProps) {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 6,
        borderRadius: 10,
        padding: "14px 16px",
        background: tone === "error" ? "#FFE8E8" : "#EEF4FF",
        color: "#000",
        fontSize: 15,
        lineHeight: "24px",
      }}
    >
      {children}
    </div>
  );
}
