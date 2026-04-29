import type { ReactNode } from "react";
import { FancyShortBannerSixteen } from "./FancyShortBannerSixteen";

type NotFoundStateProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  buttonLabel?: string;
  href?: string;
  className?: string;
};

export function NotFoundState({
  eyebrow = "404",
  title = "The page could not be found.",
  description = "The requested resource is missing or unavailable.",
  buttonLabel = "Back to Home",
  href = "/",
  className = "mt-150",
}: NotFoundStateProps) {
  return (
    <FancyShortBannerSixteen
      eyebrow={eyebrow}
      title={title}
      description={description}
      buttonLabel={buttonLabel}
      href={href}
      className={className}
    />
  );
}
