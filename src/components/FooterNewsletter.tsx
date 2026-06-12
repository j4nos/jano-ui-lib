import { FormSubmitButton } from "./FormSubmitButton";

export type FooterNewsletterProps = {
  newsletterTitle: string;
  newsletterSubtitle: string;
  newsletterPlaceholder: string;
  newsletterSubmitLabel: string;
  newsletterHelperText: string;
  paymentStripSrc?: string;
  paymentStripAlt: string;
  newsletterAction?: (formData: FormData) => void | Promise<void>;
  newsletterMessage?: string;
  newsletterError: boolean;
};

export function FooterNewsletter({
  newsletterTitle,
  newsletterSubtitle,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterHelperText,
  paymentStripSrc,
  paymentStripAlt,
  newsletterAction,
  newsletterMessage,
  newsletterError,
}: FooterNewsletterProps) {
  return (
    <>
      <h5 className="footer-title tx-dark fw-normal">{newsletterTitle}</h5>
      <h6 className="pt-15 pb-20 md-pt-10">{newsletterSubtitle}</h6>
      <form action={newsletterAction} className="position-relative">
        <input
          type="email"
          placeholder={newsletterPlaceholder}
          name="email"
          required
        />
        <FormSubmitButton
          variant="bare"
          withTopMargin={false}
          className="position-absolute"
        >
          {newsletterSubmitLabel}
        </FormSubmitButton>
      </form>
      {newsletterMessage ? (
        <div
          className={`fs-14 mt-10 ${newsletterError ? "tx-dark" : "opacity-75"}`}
        >
          {newsletterMessage}
        </div>
      ) : null}
      <div className="fs-14 mt-10 opacity-75">{newsletterHelperText}</div>
      {paymentStripSrc ? (
        <div className="mt-25">
          <img
            src={paymentStripSrc}
            alt={paymentStripAlt}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      ) : null}
    </>
  );
}
