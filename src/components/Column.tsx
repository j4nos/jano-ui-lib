import type { FormChildren } from "./formChildren";

type ColumnProps = {
  children: FormChildren;
  className?: string;
};

export function Column({ children, className = "col-12" }: ColumnProps) {
  return <div className={className}>{children}</div>;
}
