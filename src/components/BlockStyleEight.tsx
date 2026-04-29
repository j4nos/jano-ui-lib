import Link from "next/link";

type BlockStyleEightLink = {
  href: string;
  label: string;
};

type BlockStyleEightCounter = {
  value: number;
  text?: string;
  ariaLabel?: string;
};

type BlockStyleEightProps = {
  title: string;
  description: string;
  detailsLink: BlockStyleEightLink;
  counter?: BlockStyleEightCounter;
  className?: string;
};

export function BlockStyleEight({
  title,
  description,
  detailsLink,
  counter,
  className = "",
}: BlockStyleEightProps) {
  const boundedValue = counter ? Math.max(0, Math.min(100, counter.value)) : 0;
  const counterText = counter?.text ?? `${boundedValue}%`;
  const counterBackground =
    boundedValue >= 100
      ? "var(--prime-ten, #111111)"
      : `conic-gradient(var(--prime-ten, #111111) 0 ${boundedValue}%, #EFF4F7 ${boundedValue}% 100%)`;

  return (
    <div className={`block-style-eight ${className}`.trim()}>
      <div className="d-flex align-items-center">
        <div className="text">
          <h6>{title}</h6>
          <p>{description}</p>
          <Link href={detailsLink.href} className="details-btn fw-500">
            {detailsLink.label}
          </Link>
        </div>
        {counter ? (
          <div
            aria-label={counter.ariaLabel ?? `${counterText} counter`}
            className="circle_percent"
            style={{
              background: counterBackground,
              flexShrink: 0,
              position: "relative",
            }}
          >
            <div
              className="circle_inbox"
              style={{
                inset: 5,
                width: "auto",
                height: "auto",
              }}
            >
              <span className="percent_text">{counterText}</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
