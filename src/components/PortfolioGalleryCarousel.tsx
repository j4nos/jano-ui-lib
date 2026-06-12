export type PortfolioGalleryImage = {
  src: string;
  alt?: string;
};

type PortfolioGalleryCarouselProps = {
  /** Slides. The first one is rendered as the active slide. */
  images: PortfolioGalleryImage[];
  /** Id wiring the carousel to its prev/next controls. */
  carouselId?: string;
  className?: string;
};

export function PortfolioGalleryCarousel({
  images,
  carouselId = "gallery-carousel",
  className = "carousel slide me-xxl-5 md-mb-40",
}: PortfolioGalleryCarouselProps) {
  return (
    <div id={carouselId} className={className} data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item${index === 0 ? " active" : ""}`}
          >
            <img
              src={image.src}
              className="d-block w-100"
              alt={image.alt ?? "..."}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <i className="bi bi-chevron-left" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <i className="bi bi-chevron-right" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
