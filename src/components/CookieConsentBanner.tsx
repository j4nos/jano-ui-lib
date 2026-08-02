"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export type CookieConsentDecision = "granted" | "denied";

export type CookieConsentBannerProps = {
  /** Master on/off switch. false renders nothing and skips the localStorage
   * read entirely — the host app's own flag for "not ready to enable this
   * yet" (e.g. while still finishing the analytics wiring). Default: true. */
  enabled?: boolean;
  /** localStorage key the visitor's decision is persisted under, so the
   * banner doesn't reappear once they've chosen. Default: "cookie-consent". */
  storageKey?: string;
  /**
   * Called once on mount with the previously-stored decision (isInitial:
   * true, only if a decision was already stored), and again whenever the
   * visitor clicks Accept/Reject (isInitial: false). This is the banner's
   * only integration point — it has no opinion on which analytics vendors
   * exist. The host app wires up GA/PostHog/whatever else here, e.g.:
   *
   *   <CookieConsentBanner
   *     onDecision={(decision) => {
   *       if (decision === "granted") { loadGoogleAnalytics(); posthog.opt_in_capturing(); }
   *       else posthog.opt_out_capturing();
   *     }}
   *   />
   */
  onDecision?: (decision: CookieConsentDecision, isInitial: boolean) => void;
  message?: ReactNode;
  /** Privacy policy link shown after the message. Omit to not show one. */
  policyHref?: string;
  policyLabel?: string;
  acceptLabel?: string;
  rejectLabel?: string;
  className?: string;
};

/**
 * A minimal GDPR/ePrivacy consent banner: shows once (nothing stored yet for
 * `storageKey`), lets the visitor accept or reject, remembers the choice,
 * and never renders again. Extracted from skillwhimsy's original
 * CookieConsent component — see its own file for the app-specific
 * GA/PostHog wiring now passed in via `onDecision`.
 */
export function CookieConsentBanner({
  enabled = true,
  storageKey = "cookie-consent",
  onDecision,
  message = "We use analytics cookies to understand how the site is used. They are only set if you accept. Essential cookies needed to run the app are always on.",
  policyHref,
  policyLabel = "Privacy Policy",
  acceptLabel = "Accept analytics",
  rejectLabel = "Reject",
  className,
}: CookieConsentBannerProps) {
  const [decision, setDecision] = useState<CookieConsentDecision | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const stored = window.localStorage.getItem(storageKey) as CookieConsentDecision | null;
    setDecision(stored);
    setReady(true);
    if (stored) onDecision?.(stored, true);
    // Deliberately excludes onDecision from deps - it's expected to be a
    // stable callback (module-level function or useCallback) in typical
    // usage; re-running this on every render of a fresh inline arrow would
    // just re-fire onDecision harmlessly for an already-stored decision.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, storageKey]);

  function decide(next: CookieConsentDecision) {
    window.localStorage.setItem(storageKey, next);
    setDecision(next);
    onDecision?.(next, false);
  }

  // Don't render until the stored decision has been read (avoids a flash of
  // the banner before localStorage is checked), and hide once a decision
  // exists. Also hidden entirely while disabled.
  if (!enabled || !ready || decision) return null;

  return (
    <aside
      role="dialog"
      aria-label="Cookie consent"
      className={className}
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 1080,
        margin: "0 auto",
        maxWidth: 720,
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        padding: "16px 20px",
      }}
    >
      <p style={{ margin: 0, marginBottom: 12, fontSize: 14, lineHeight: 1.5 }}>
        {message}
        {policyHref ? (
          <>
            {" "}
            See our <Link href={policyHref}>{policyLabel}</Link>.
          </>
        ) : null}
      </p>
      <p style={{ margin: 0, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button type="button" tone="form" onClick={() => decide("granted")}>
          {acceptLabel}
        </Button>
        <Button
          type="button"
          tone="form"
          style={{ background: "transparent" }}
          onClick={() => decide("denied")}
        >
          {rejectLabel}
        </Button>
      </p>
    </aside>
  );
}
