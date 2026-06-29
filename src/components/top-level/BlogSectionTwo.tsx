import { Container } from "../Container";
import { Row } from "../Row";
import type { RowChildren } from "../Row";

export type BlogSectionTwoProps = {
  children: RowChildren;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function BlogSectionTwo({
  children,
  eyebrow = "Blog",
  title = "Latest articles",
  description = "Short reads and updates from the team.",
}: BlogSectionTwoProps) {
  return (
    <div className="blog-section-two mt-170 lg-mt-100">
      <Container>
        <div className="title-style-six text-center wow fadeInUp mb-50 lg-mb-10">
          <div className="sc-title" style={{ color: "#FF8A8A" }}>
            {eyebrow}
          </div>
          <h2 className="main-title fw-500 tx-dark">{title}</h2>
          {description && <p className="fs-18 mt-10">{description}</p>}
        </div>
        <Row>{children}</Row>
      </Container>
    </div>
  );
}
