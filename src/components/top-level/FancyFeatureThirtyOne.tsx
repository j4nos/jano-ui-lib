import { Container } from "../Container";
import { Row } from "../Row";
import { Column } from "../Column";
import { FancyFeatureThirtyOneTitle } from "../FancyFeatureThirtyOneTitle";
import { FancyFeatureThirtyOneCard } from "../FancyFeatureThirtyOneCard";

export type FancyFeatureThirtyOneItem = {
  iconSrc: string;
  label: string;
  description?: string;
};

export type FancyFeatureThirtyOneProps = {
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description?: string;
  items: FancyFeatureThirtyOneItem[];
  /** Optional asset overrides; default to the Jano theme paths. */
  highlightShapeSrc?: string;
  shapeOneSrc?: string;
  shapeTwoSrc?: string;
};

export default function FancyFeatureThirtyOne({
  title,
  description,
  items,
  highlightShapeSrc = "/jano/images/shape/shape_122.svg",
  shapeOneSrc = "/images/shape/shape_124.svg",
  shapeTwoSrc = "/images/shape/shape_125.svg",
}: FancyFeatureThirtyOneProps) {
  return (
    <div className="fancy-feature-thirtyOne position-relative zn2 pt-140 pb-140 lg-pt-100 lg-pb-70">
      <Container>
        {[
          <Row key="title-row">
            <Column className="col-xl-8 col-lg-9 m-auto">
              <FancyFeatureThirtyOneTitle
                prefix={title.prefix}
                highlight={title.highlight}
                suffix={title.suffix}
                highlightShapeSrc={highlightShapeSrc}
                description={description}
              />
            </Column>
          </Row>,
          <Row key="cards-row">
            {items.map((item, index) => (
              <Column className="col-md-4" key={item.label}>
                <FancyFeatureThirtyOneCard
                  iconSrc={item.iconSrc}
                  label={item.label}
                  description={item.description}
                  wowDelay={index === 0 ? undefined : `${index * 0.1 + 0.1}s`}
                />
              </Column>
            ))}
          </Row>,
        ]}
      </Container>{" "}
      {/* /.container */}
      <img src={shapeOneSrc} alt="" className="shapes shape-one" />
      <img src={shapeTwoSrc} alt="" className="shapes shape-two" />
    </div>
  );
}
