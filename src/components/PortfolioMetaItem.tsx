import type { ReactNode } from "react";

export type PortfolioMetaItemProps = {
  label: ReactNode;
  value: ReactNode;
};

export function PortfolioMetaItem({ label, value }: PortfolioMetaItemProps) {
  return (
    <>
      <div className="pt-title fw-bold tx-dark text-uppercase">{label}</div>
      <div className="pt-text">{value}</div>
    </>
  );
}
