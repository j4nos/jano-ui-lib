import { Container } from "../Container";
import { Row } from "../Row";
import { Column } from "../Column";
import { FeatureCard } from "../FeatureCard";

type FeatureItem = {
  title: string;
  description: string;
  /** Icon image shown inside the rounded circle. */
  icon?: string;
};

type Props = {
  items?: [FeatureItem, FeatureItem, FeatureItem];
};

export default function FancyFeatureThirtyNine({
  items = [
    {
      title: "Learn skills over 120k+",
      description: "Video courses.",
      icon: "jano/images/icon/icon_124.svg",
    },
    {
      title: "Choose courses taught",
      description: "Real-world experts.",
      icon: "jano/images/icon/icon_125.svg",
    },
    {
      title: "Learn lifetime access on",
      description: "Mobile and desktop.",
      icon: "jano/images/icon/icon_126.svg",
    },
  ],
}: Props) {
  return (
    <div className="fancy-feature-thirtyNine position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10">
      <Container>
        <Row className="gx-xxl-5">
          {items.map((item, index) => (
            <Column key={index} className="col-lg-4 col-md-6">
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Column>
          ))}
        </Row>
      </Container>
      <img
        src="jano/images/shape/shape_148.svg"
        alt=""
        className="shapes shape-one lazy-img"
        style={{}}
      />
      <img
        src="jano/images/shape/shape_149.svg"
        alt=""
        className="shapes shape-two lazy-img"
        style={{}}
      />
      <img
        src="jano/images/shape/shape_150.svg"
        alt=""
        className="shapes shape-three lazy-img"
        style={{}}
      />
      <img
        src="jano/images/shape/shape_151.svg"
        alt=""
        className="shapes shape-four lazy-img"
        style={{}}
      />
    </div>
  );
}
