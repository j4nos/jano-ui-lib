import type { ReactNode } from "react";

type MainPageWrapperProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Top-level page wrapper that applies the Jano `main-page-wrapper` class.
 * Use as the outermost element wrapping the header and page content.
 */
export function MainPageWrapper({
  children,
  className = "",
}: MainPageWrapperProps) {
  return (
    <div className={`main-page-wrapper ${className}`.trim()}>{children}</div>
  );
}
