import type { HTMLAttributes } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
};

/**
 * Semantic heading wrapper. Use instead of native h1-h6 elements.
 * Defaults to h2. Forwards all native heading attributes.
 */
export function Heading({ level = 2, children, className, ...rest }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  return (
    <Tag className={className || undefined} {...rest}>
      {children}
    </Tag>
  );
}
