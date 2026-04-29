import type { ReactNode } from "react";

type BlogCommentFormProps = {
  children: ReactNode;
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
