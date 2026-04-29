"use client";

import type { ReactNode } from "react";

type AuthPageShellProps = {
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
};

export function AuthPageShell({
  title,
  subtitle,
  children,
}: AuthPageShellProps) {
  return (
    <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
      <div className="form-wrapper position-relative m-auto">
        <div className="text-center">
          <h2 className="tx-dark mb-30 lg-mb-10">{title}</h2>
          <p className="fs-20 tx-dark">{subtitle}</p>
        </div>
        {children}
      </div>
      <p className="mt-auto pt-50">Copyright @2026 Snoopyon.</p>
      <img
        src="/images/assets/ils_11.png"
        alt="illustration"
        className="lazy-img illustration-one"
        style={{ pointerEvents: "none" }}
      />
      <img
        src="/images/assets/ils_12.png"
        alt="illustration"
        className="lazy-img illustration-two"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
