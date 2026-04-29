type FeatureItem = {
  title: string;
  description: string;
};

type Props = {
  items?: [FeatureItem, FeatureItem, FeatureItem];
};

export default function FancyFeatureThirtyNine({
  items = [
    { title: "Learn skills over 120k+", description: "Video courses." },
    { title: "Choose courses taught", description: "Real-world experts." },
    {
      title: "Learn lifetime access on",
      description: "Mobile and desktop.",
    },
  ],
}: Props) {
  return (
    <div className="fancy-feature-thirtyNine position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10">
      <div className="container">
        <div className="row gx-xxl-5">
          <div className="col-lg-4 col-md-6">
            <div className="card-style-seventeen d-flex align-items-center mb-40">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <img
                  src="jano/images/icon/icon_124.svg"
                  alt=""
                  className="lazy-img"
                  style={{}}
                />
              </div>
              <div className="ps-4 text-wrapper">
                <h4 className="text-white m0">{items[0].title}</h4>
                <p className="m0">{items[0].description}</p>
              </div>
            </div>{" "}
            {/* /.card-style-seventeen */}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-style-seventeen d-flex align-items-center mb-40">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <img
                  src="jano/images/icon/icon_125.svg"
                  alt=""
                  className="lazy-img"
                  style={{}}
                />
              </div>
              <div className="ps-4 text-wrapper">
                <h4 className="text-white m0">{items[1].title}</h4>
                <p className="m0">{items[1].description}</p>
              </div>
            </div>{" "}
            {/* /.card-style-seventeen */}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-style-seventeen d-flex align-items-center mb-40">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <img
                  src="jano/images/icon/icon_126.svg"
                  alt=""
                  className="lazy-img"
                  style={{}}
                />
              </div>
              <div className="ps-4 text-wrapper">
                <h4 className="text-white m0">{items[2].title}</h4>
                <p className="m0">{items[2].description}</p>
              </div>
            </div>{" "}
            {/* /.card-style-seventeen */}
          </div>
        </div>
      </div>
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
