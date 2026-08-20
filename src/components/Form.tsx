import type { ComponentPropsWithoutRef } from "react";
import { FormContent } from "./FormContent";
import type { FormChildren } from "./formChildren";

type FormProps = Omit<
  ComponentPropsWithoutRef<"form">,
  "children" | "className" | "id"
> & {
  children: FormChildren;
  id?: string;
  className?: string;
};

export function Form({
  children,
  id,
  className = "",
  ...formProps
}: FormProps) {
  const classes = ["blog-comment-form", className].filter(Boolean).join(" ");
  return (
    <div id={id} className={classes}>
      <FormContent {...formProps}>{children}</FormContent>
    </div>
  );
}
