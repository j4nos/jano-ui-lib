import type { ReactNode } from "react";

type ColumnProps = {
  children: ReactNode;
  className?: string;
};

export function Column({ children, className = "col-12" }: ColumnProps) {
  return <div className={className}>{children}</div>;
}
