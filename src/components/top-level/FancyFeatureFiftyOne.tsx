import type { ReactNode } from "react";
import { Container } from "../Container";
import { Row } from "../Row";
import { Column } from "../Column";
import { TitleStyleFive } from "../TitleStyleFive";

export type FancyFeatureFiftyOneShape = {
  /** Shape image. */
  src: string;
  alt?: string;
  className?: string;
};

type FancyFeatureFiftyOneProps = {
  subtitle?: ReactNode;
  title?: ReactNode;
  /** Decorative shape rendered at the bottom. Pass `null` to hide it. */
  shape?: FancyFeatureFiftyOneShape | null;
  className?: string;
};

const DEFAULT_SHAPE: FancyFeatureFiftyOneShape = {
  src: "/jano/images/shape/shape_172.svg",
  alt: "",
  className: "shapes shape-two",
};

export function FancyFeatureFiftyOne({
  subtitle = "UI/UX Design",
  title = "Redpen branding & UI design.",
  shape = DEFAULT_SHAPE,
  className,
}: FancyFeatureFiftyOneProps) {
  const rootClassName = [
    "fancy-feature-fiftyOne position-relative mt-200",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <Container>
        <Row>
          <Column className="col-lg-7 wow fadeInLeft">
            <TitleStyleFive subtitle={subtitle} title={title} />
          </Column>
        </Row>
      </Container>
      {shape && (
        <img
          src={shape.src}
          alt={shape.alt ?? ""}
          className={shape.className ?? "shapes shape-two"}
        />
      )}
    </div>
  );
}
