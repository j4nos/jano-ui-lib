import type { ComponentPropsWithoutRef } from "react";
import { Form } from "./Form";
import type { FormChildren } from "./formChildren";

type BlogCommentFormProps = Omit<
  ComponentPropsWithoutRef<"form">,
  "children" | "className" | "id"
> & {
  children: FormChildren;
  id?: string;
  className?: string;
};

export function BlogCommentForm({
  children,
  id,
  className = "",
  ...formProps
}: BlogCommentFormProps) {
  const classes = ["blog-comment-form", className].filter(Boolean).join(" ");
  return (
    <div id={id} className={classes}>
      <Form {...formProps}>{children}</Form>
    </div>
  );
}
