import { type ComponentPropsWithoutRef } from "react";
import type { FormChildren } from "./formChildren";

export type { FormChild, FormChildren } from "./formChildren";

type FormProps = Omit<ComponentPropsWithoutRef<"form">, "children"> & {
  children: FormChildren;
};

export function Form({ className = "", children, ...props }: FormProps) {
  const classes = [className].filter(Boolean).join(" ");

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  );
}
