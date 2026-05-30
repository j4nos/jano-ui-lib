export function ErrorPageContent() {
  return (
    <div className="error-page-content d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-lg-7 m-auto">
            <h3>Opps! you’r on the wrong place.</h3>
            <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
              Can not find what you need? Take a moment and do a search below or
              start from our Homepage.
            </p>
            <a className="btn-twentyOne fw-500 tran3s" href="/">
              Back to home
            </a>
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          width={800}
          height={522}
          decoding="async"
          data-nimg={1}
          className="m-auto"
          style={{ color: "transparent" }}
          src="/jano/images/assets/ils_06.svg"
        />
      </div>
      <img
        alt="shape"
        loading="lazy"
        width={1915}
        height={674}
        decoding="async"
        data-nimg={1}
        className="shapes shape-one w-100"
        style={{ color: "transparent" }}
        src="/jano/images/shape/shape_178.svg"
      />
    </div>
  );
}
