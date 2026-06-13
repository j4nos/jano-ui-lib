"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Row } from "../Row";
import { Column } from "../Column";
import { TitleStyleTen } from "../TitleStyleTen";

export type FeedbackCarouselItem = {
  company: string;
  role?: string;
  quote: string;
  metric?: string;
  bgColor?: string;
  href?: string;
};

export type FeedbackCarouselProps = {
  id?: string;
  sectionLabel?: string;
  title: { prefix: string; highlight: string; suffix: string };
  items: FeedbackCarouselItem[];
  iconSrc?: string;
  highlightShapeSrc?: string;
  shapeOneSrc?: string;
  shapeTwoSrc?: string;
  /** Visible cards at >1200px / <=1200px / <=768px. Defaults: 3 / 2 / 1. */
  slidesToShow?: { base: number; lg: number; sm: number };
  /** Autoplay interval in ms. Defaults to 3500. Set to 0 to disable. */
  autoplayMs?: number;
};

const DEFAULT_TONES = ["#FFED4E", "#00FCFC", "#F27AFF", "#52C1FF"];
const TRANSITION_MS = 300;

/**
 * A dependency-free (no jQuery/Slick) carousel that renders the same markup and
 * styling as {@link FeedbackSectionTen} (`.feedback-section-ten` /
 * `.feedback-block-ten` / `.slick-arrow-five`). It supports responsive
 * slides-to-show, autoplay (paused on hover), prev/next arrows and seamless
 * infinite looping — initialised via React effects, so there is no hydration
 * race or global init script.
 */
export default function FeedbackCarousel({
  id,
  sectionLabel,
  title,
  items,
  iconSrc = "/jano/images/icon/icon_98.svg",
  highlightShapeSrc = "/images/shape/shape_129.svg",
  shapeOneSrc = "/images/shape/shape_130.svg",
  shapeTwoSrc = "/images/shape/shape_131.svg",
  slidesToShow = { base: 3, lg: 2, sm: 1 },
  autoplayMs = 3500,
}: FeedbackCarouselProps) {
  const slidesForWidth = useCallback(
    (width: number): number => {
      if (width <= 768) return slidesToShow.sm;
      if (width <= 1200) return slidesToShow.lg;
      return slidesToShow.base;
    },
    [slidesToShow.base, slidesToShow.lg, slidesToShow.sm]
  );

  const [show, setShow] = useState(slidesToShow.base);
  const n = items.length;
  const loop = n > show;

  // Bidirectional infinite: clone `show` items on each side and start past them.
  const slides = loop
    ? [...items.slice(n - show), ...items, ...items.slice(0, show)]
    : items;

  const [index, setIndex] = useState(loop ? show : 0);
  const [animate, setAnimate] = useState(true);
  const hoveringRef = useRef(false);

  useEffect(() => {
    function onResize() {
      const next = slidesForWidth(window.innerWidth);
      setShow((prev) => (prev === next ? prev : next));
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [slidesForWidth]);

  // Re-seat the start index whenever the visible count changes.
  useEffect(() => {
    setAnimate(false);
    setIndex(n > show ? show : 0);
  }, [show, n]);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (!loop) return;
      setAnimate(true);
      setIndex((i) => i + dir);
    },
    [loop]
  );

  // Seamless wrap: after sliding onto a clone, jump to the real slide silently.
  useEffect(() => {
    if (!loop || !animate) return;
    const timer = setTimeout(() => {
      setIndex((i) => {
        if (i >= n + show) {
          setAnimate(false);
          return i - n;
        }
        if (i < show) {
          setAnimate(false);
          return i + n;
        }
        return i;
      });
    }, TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [index, animate, loop, n, show]);

  // Re-enable the transition right after a silent jump.
  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  // Autoplay (paused on hover, like Slick's pauseOnHover default).
  useEffect(() => {
    if (!loop || !autoplayMs) return;
    const timer = setInterval(() => {
      if (!hoveringRef.current) step(1);
    }, autoplayMs);
    return () => clearInterval(timer);
  }, [loop, autoplayMs, step]);

  // Each slide is exactly (100/show)% of the track so translateX never drifts;
  // the 30px side padding (border-box) forms the 60px gutter between cards.
  const slideStyle: CSSProperties = {
    flex: `0 0 ${100 / show}%`,
    maxWidth: `${100 / show}%`,
    boxSizing: "border-box",
    padding: "0 30px",
  };
  const trackStyle: CSSProperties = {
    display: "flex",
    transform: `translateX(-${index * (100 / show)}%)`,
    transition: animate ? `transform ${TRANSITION_MS}ms ease` : "none",
  };

  return (
    <div
      id={id}
      className="feedback-section-ten position-relative pt-200 lg-pt-150"
    >
      <div className="container">
        <div className="position-relative">
          <Row>
            <Column className="col-lg-5">
              <TitleStyleTen
                sectionLabel={sectionLabel}
                title={title}
                highlightShapeSrc={highlightShapeSrc}
              />
            </Column>
          </Row>
          <div className="slider-wrapper pt-70 lg-pt-40">
            <div style={{ overflow: "hidden" }}>
              <div
                style={trackStyle}
                onMouseEnter={() => {
                  hoveringRef.current = true;
                }}
                onMouseLeave={() => {
                  hoveringRef.current = false;
                }}
              >
                {slides.map((item, i) => {
                  const tone =
                    item.bgColor ?? DEFAULT_TONES[i % DEFAULT_TONES.length];
                  const card = (
                    <div className="feedback-block-ten" style={{ background: tone }}>
                      <div className="cmp-name fw-500 tx-dark">{item.company}</div>
                      {item.role ? (
                        <div className="fs-18 tx-dark">{item.role}</div>
                      ) : null}
                      <p className="tx-dark mt-40 mb-70 lg-mt-30 lg-mb-50">
                        {item.quote}
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        {item.metric ? (
                          <div className="fw-500 tx-dark fs-18">{item.metric}</div>
                        ) : (
                          <span />
                        )}
                        <img src={iconSrc} alt="" />
                      </div>
                    </div>
                  );
                  return (
                    <div key={`${item.company}-${i}`} style={slideStyle}>
                      {item.href ? (
                        <a href={item.href} className="d-block">
                          {card}
                        </a>
                      ) : (
                        card
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {loop ? (
            <ul className="slider-arrows slick-arrow-five d-flex justify-content-center style-none">
              <li
                className="slick-arrow text-center tran3s"
                onClick={() => step(-1)}
              >
                <i className="bi bi-arrow-left" />
              </li>
              <li
                className="slick-arrow text-center tran3s"
                onClick={() => step(1)}
              >
                <i className="bi bi-arrow-right" />
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      <img src={shapeOneSrc} alt="" className="shapes shape-one" />
      <img src={shapeTwoSrc} alt="" className="shapes shape-two" />
    </div>
  );
}
