export type HeroBannerNineGalleryRightProps = {
  galleryImageThreeSrc?: string;
};

export function HeroBannerNineGalleryRight({
  galleryImageThreeSrc = "/jano/images/media/img_43.jpg",
}: HeroBannerNineGalleryRightProps) {
  return (
    <div className="img-box position-relative mt-35 img-box-three">
      <img src={galleryImageThreeSrc} alt="" className="main-img" />
      <img
        src="/jano/images/shape/shape_116.svg"
        alt=""
        className="shapes shape-two"
      />
      <img
        src="/jano/images/shape/shape_117.svg"
        alt=""
        className="shapes shape-three"
      />
    </div>
  );
}
