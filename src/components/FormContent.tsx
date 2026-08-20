import { type ComponentPropsWithoutRef } from "react";
import type { FormChildren } from "./formChildren";

export type { FormChild, FormChildren } from "./formChildren";

type FormContentProps = Omit<ComponentPropsWithoutRef<"form">, "children"> & {
  children: FormChildren;
};

export function FormContent({
  className = "",
  children,
  ...props
}: FormContentProps) {
  const classes = [className].filter(Boolean).join(" ");

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  );
}
