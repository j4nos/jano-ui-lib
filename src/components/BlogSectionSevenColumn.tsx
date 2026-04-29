import type { ReactNode } from "react";

export type BlogSectionSevenColumnProps = {
  children: ReactNode;
  className?: string;
};

export function BlogSectionSevenColumn({
  children,
  className = "col-lg-8 m-auto",
}: BlogSectionSevenColumnProps) {
  return <div className={className}>{children}</div>;
}
