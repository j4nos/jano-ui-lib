export type HeroBannerNineGalleryLeftProps = {
  galleryImageOneSrc?: string;
  galleryImageTwoSrc?: string;
};

export function HeroBannerNineGalleryLeft({
  galleryImageOneSrc = "/jano/images/media/img_41.jpg",
  galleryImageTwoSrc = "/jano/images/media/img_42.jpg",
}: HeroBannerNineGalleryLeftProps) {
  return (
    <>
      <div className="img-box position-relative mt-35 img-box-one">
        <img src={galleryImageOneSrc} alt="" className="main-img" />
        <img
          src="/jano/images/shape/shape_115.svg"
          alt=""
          className="shapes shape-one"
        />
      </div>
      <div className="img-box position-relative mt-35 img-box-two">
        <img src={galleryImageTwoSrc} alt="" className="main-img" />
        <img
          src="/jano/images/shape/shape_118.svg"
          alt=""
          className="shapes shape-four"
        />
      </div>
    </>
  );
}
