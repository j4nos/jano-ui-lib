import type { ReactElement } from "react";
import { Form } from "./Form";

type BlogCommentFormChild =
  | ReactElement<unknown, typeof Form>
  | Array<ReactElement<unknown, typeof Form> | null>;

type BlogCommentFormProps = {
  children: BlogCommentFormChild;
  id?: string;
  className?: string;
};

export function BlogCommentForm({
  children,
  id,
  className = "",
}: BlogCommentFormProps) {
  const classes = ["blog-comment-form", className].filter(Boolean).join(" ");
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}
