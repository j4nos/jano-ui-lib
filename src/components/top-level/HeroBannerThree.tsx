import type { ReactElement } from "react";

export type HeroBannerThreeProps = Record<string, never>;

export function HeroBannerThree(_props: HeroBannerThreeProps): ReactElement {
  return (
    <div className="hero-banner-three position-relative pt-200 md-pt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft">
            <a href="#" className="slogan d-inline-block">
              <strong className="fw-500">Offer</strong> is going on till friday,
              $1.99/mo. <i className="fas fa-chevron-right" />
            </a>
            <h1 className="hero-heading fw-bold mt-45 mb-40 md-mt-20">
              Word’s No. 1 app for Online training.
            </h1>
            <p className="text-lg mb-50 lg-mb-30 pe-xxl-4">
              Janu delivered blazing fast performance, striking word soludtion
            </p>
            <div className="d-sm-flex align-items-center">
              <a
                className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
                data-fancybox=""
                href="https://www.youtube.com/embed/aXFSJTjVjw0"
              >
                <i className="bi bi-play" />
                <div className="ps-3">
                  <span className="d-block fs-15 text-uppercase">Watch</span>
                  <strong className="fs-18 fw-normal tx-dark d-block">
                    Intro Video
                  </strong>
                </div>
              </a>
              <div className="dropdown download-btn d-inline-block mb-25 me-4 order-sm-first">
                <button
                  className="dropdown-toggle tran3s"
                  type="button"
                  id="appDownBtn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Download - It’s free
                </button>
                <ul className="dropdown-menu" aria-labelledby="appDownBtn">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center fw-500"
                      href="#"
                    >
                      <img src="jano/images/icon/icon_22.svg" alt="" />{" "}
                      <span className="ps-2">IOS &amp; Android</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center fw-500"
                      href="#"
                    >
                      <img src="jano/images/icon/icon_23.svg" alt="" />{" "}
                      <span className="ps-2">Mac &amp; Windows</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="fw-500 mt-40 mb-5">A+ Rating </h2>
            <p className="fs-18 opacity-75">
              Avg rating 4.8 makes us world most best apps.
            </p>
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      <div className="mobile-screen wow fadeInRight">
        <div className="row gx-xxl-5 justify-content-center align-items-center">
          <div className="col-6">
            <img
              src="jano/images/lazy.svg"
              data-src="jano/images/media/img_13.png"
              alt=""
              className="lazy-img screen-one"
            />
          </div>
          <div className="col-6">
            <div className="card-one d-flex align-items-center mb-50 xs-mb-20">
              <div className="icon rounded-circle d-none d-sm-flex align-items-center justify-content-center">
                <i className="bi bi-check-lg" />
              </div>
              <h6 className="fw-500 fs-20 ps-sm-4 m0">
                Save up to 50% in Yearly plan.
              </h6>
            </div>
            <img
              src="jano/images/lazy.svg"
              data-src="jano/images/media/img_14.png"
              alt=""
              className="lazy-img screen-two"
            />
          </div>
        </div>
      </div>{" "}
      {/* /.mobile-screen */}
    </div>
  );
}
