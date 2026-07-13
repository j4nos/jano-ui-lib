"use client";

import { useState, type FormEvent, type ReactElement, type ReactNode } from "react";

export type HeroBannerSixFieldType = "text" | "file";

export type HeroBannerSixProps = {
  heading?: ReactNode;
  subtitle?: ReactNode;
  /** "text" renders a normal text field (default); "file" renders a file picker. */
  fieldType?: HeroBannerSixFieldType;
  /** Placeholder for the text field, or accessible label for the file field. */
  fieldLabel?: string;
  /** `accept` attribute for the file field (e.g. "video/*"). Ignored for fieldType="text". */
  fieldAccept?: string;
  ctaLabel?: string;
  /** Text right before the sign-in link. Pass "" to hide the whole sign-in line. */
  signInPrefix?: ReactNode;
  signInLabel?: string;
  signInHref?: string;
  /** Called on submit with the text value or the selected file, depending on `fieldType`. */
  onSubmit?: (value: string | File | null) => void;
};

/**
 * Hero section with a heading, subtitle, and a single-field form (text or
 * file) with a submit CTA. Fully prop-driven so it can be reused for
 * different flows (e.g. a URL/keyword search vs. a file upload) — the
 * component itself has no opinion on what submitting should do; that's up
 * to `onSubmit`.
 */
export function HeroBannerSix({
  heading = (
    <>
      <span className="position-relative">Increase</span> your web traffic
      with our expert
    </>
  ),
  subtitle = "Agency work with top rated talented people provide qulaity services.",
  fieldType = "text",
  fieldLabel = "Enter domain, URL or keyword",
  fieldAccept,
  ctaLabel = "Start Now",
  signInPrefix = "Already using janu? ",
  signInLabel = "Sign in.",
  signInHref = "signin.html",
  onSubmit,
}: HeroBannerSixProps): ReactElement {
  const [textValue, setTextValue] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(fieldType === "file" ? file : textValue);
  };

  return (
    <div className="hero-banner-six position-relative pt-180 md-pt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 m-auto text-center wow fadeInUp">
            <h1 className="hero-heading fw-light tx-dark">{heading}</h1>
            <p className="text-lg mb-75 pt-60 lg-mb-40 lg-pt-40">{subtitle}</p>
            <div
              className="subscribe-form m-auto wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <form onSubmit={handleSubmit} className="position-relative">
                {fieldType === "file" ? (
                  <input
                    type="file"
                    accept={fieldAccept}
                    aria-label={fieldLabel}
                    onChange={(event) =>
                      setFile(event.target.files?.[0] ?? null)
                    }
                  />
                ) : (
                  <input
                    type="email"
                    placeholder={fieldLabel}
                    value={textValue}
                    onChange={(event) => setTextValue(event.target.value)}
                  />
                )}
                <button
                  type="submit"
                  className="tran3s position-absolute fw-500"
                >
                  {ctaLabel}
                </button>
              </form>
              {signInLabel && (
                <p className="m0 pt-10 fw-500 tx-dark fs-15">
                  {signInPrefix}
                  <a href={signInHref} className="text-decoration-underline">
                    {signInLabel}
                  </a>
                </p>
              )}
            </div>{" "}
            {/* /.subscribe-form */}
          </div>
        </div>
        <div className="illustration-holder text-center mt-45 wow fadeInUp">
          <div className="d-lg-block">
            <img
              src="/jano/images/assets/ils_02.svg"
              alt=""
              className="m-auto"
            />
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      <div className="shapes shape-one rounded-circle" />
      <img
        src="/jano/images/shape/shape_83.svg"
        alt=""
        className="shapes shape-two"
      />
      <div className="shapes shape-three" />
      <img
        src="/jano/images/shape/shape_84.svg"
        alt=""
        className="shapes shape-four"
      />
      <img
        src="/jano/images/shape/shape_85.svg"
        alt=""
        className="shapes shape-five"
      />
      <div className="shapes shape-six rounded-circle" />
      <div className="shapes shape-seven rounded-circle" />
      <img
        src="/jano/images/shape/shape_84.svg"
        alt=""
        className="shapes shape-eight"
      />
      <img
        src="/jano/images/shape/shape_83.svg"
        alt=""
        className="shapes shape-nine"
      />
    </div>
  );
}
