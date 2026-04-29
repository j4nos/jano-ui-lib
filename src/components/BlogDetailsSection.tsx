import type { ReactNode } from "react";

type BlogDetailsSectionProps = {
  children: ReactNode;
  sectionClassName?: string;
  contentClassName?: string;
};

export function BlogDetailsSection({
  children,
  sectionClassName = "blog-details-one mt-250 lg-mt-200",
  contentClassName = "col-lg-8",
}: BlogDetailsSectionProps) {
  return (
    <div className={sectionClassName}>
      <div className="container">
        <div className="border-bottom pb-130 lg-pb-60">
          <div className="row gx-xl-5">
            <div className={contentClassName}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
