import { BrandWordmark } from "./BrandWordmark";
import type { HeaderBrandProps } from "./top-level/Header";

export type FooterBrandIntroProps = {
  brand?: HeaderBrandProps;
};

export function FooterBrandIntro({ brand }: FooterBrandIntroProps) {
  return <div className="logo">{brand ? <BrandWordmark {...brand} /> : null}</div>;
}
