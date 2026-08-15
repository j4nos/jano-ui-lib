type DividerProps = {
  /**
   * Controls spacing/appearance (e.g. "mt-30 mb-10"). Left entirely to the
   * caller — this component only renders the line itself — so it can drop
   * into any layout (a form, a card, a section) without fighting a default.
   */
  className?: string;
};

/**
 * A plain horizontal rule used to visually separate two sections within the
 * same block — e.g. splitting a "Continue with Google" button from the
 * email/password fields below it on an auth form. Renders a bare `<hr>`
 * (already themed by the app's bundled Bootstrap CSS), so no extra
 * stylesheet is needed to use it.
 */
export function Divider({ className }: DividerProps) {
  return <hr className={className || undefined} />;
}
