import type { ReactElement } from "react";

// Empty placeholder — fill in once the HeroBannerSix design is ready.
export type HeroBannerSixProps = Record<string, never>;

export function HeroBannerSix(): ReactElement {
  return (
    <div className="hero-banner-six position-relative pt-180 md-pt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 m-auto text-center wow fadeInUp">
            <h1 className="hero-heading fw-light tx-dark">
              <span className="position-relative">Increase</span> your web
              traffic with our expert
            </h1>
            <p className="text-lg mb-75 pt-60 lg-mb-40 lg-pt-40">
              Agency work with top rated talented people provide qulaity
              services.
            </p>
            <div
              className="subscribe-form m-auto wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <form action="#" className="position-relative">
                <input
                  type="email"
                  placeholder="Enter domain, URL or keyword"
                />
                <button className="tran3s position-absolute fw-500">
                  Start Now
                </button>
              </form>
              <p className="m0 pt-10 fw-500 tx-dark fs-15">
                Already using janu?{" "}
                <a href="signin.html" className="text-decoration-underline">
                  Sign in.
                </a>
              </p>
            </div>{" "}
            {/* /.subscribe-form */}
          </div>
        </div>
        <div className="illustration-holder text-center mt-45 wow fadeInUp">
          <div className="d-lg-block">
            <img
              src="jano/images/lazy.svg"
              data-src="jano/images/assets/ils_02.svg"
              alt=""
              className="lazy-img m-auto"
            />
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      <div className="shapes shape-one rounded-circle" />
      <img
        src="jano/images/lazy.svg"
        data-src="jano/images/shape/shape_83.svg"
        alt=""
        className="lazy-img shapes shape-two"
      />
      <div className="shapes shape-three" />
      <img
        src="jano/images/lazy.svg"
        data-src="jano/images/shape/shape_84.svg"
        alt=""
        className="lazy-img shapes shape-four"
      />
      <img
        src="jano/images/lazy.svg"
        data-src="jano/images/shape/shape_85.svg"
        alt=""
        className="lazy-img shapes shape-five"
      />
      <div className="shapes shape-six rounded-circle" />
      <div className="shapes shape-seven rounded-circle" />
      <img
        src="jano/images/lazy.svg"
        data-src="jano/images/shape/shape_84.svg"
        alt=""
        className="lazy-img shapes shape-eight"
      />
      <img
        src="jano/images/lazy.svg"
        data-src="jano/images/shape/shape_83.svg"
        alt=""
        className="lazy-img shapes shape-nine"
      />
    </div>
  );
}
