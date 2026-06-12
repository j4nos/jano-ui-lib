import type { ReactNode } from "react";

export type FooterBrandIntroProps = {
  brand?: ReactNode;
};

export function FooterBrandIntro({ brand }: FooterBrandIntroProps) {
  return <div className="logo">{brand}</div>;
}
