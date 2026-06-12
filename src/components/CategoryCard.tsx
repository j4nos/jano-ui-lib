export type CategoryCardProps = {
  /** Heading shown under the icon. */
  title: string;
  /** Smaller line below the title (e.g. "120+ Courses"). */
  subtitle: string;
  /** Link target for the whole card. Defaults to `#`. */
  href?: string;
  /** Icon image `src` (e.g. `jano/images/icon/icon_127.svg`). */
  icon: string;
  /** Alt text for the icon image. */
  iconAlt?: string;
};

/**
 * Single category card used in the courses grid (`card-style-eighteen`).
 * Renders one icon + title + subtitle linked card. The markup was previously
 * duplicated per category index inside `FancyFeatureForty`.
 */
export function CategoryCard({
  title,
  subtitle,
  href = "#",
  icon,
  iconAlt = "",
}: CategoryCardProps) {
  return (
    <a
      href={href}
      className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
    >
      <div className="icon d-flex align-items-end justify-content-center">
        <img src={icon} alt={iconAlt} className="lazy-img" style={{}} />
      </div>
      <h4 className="tx-dark mt-45 lg-mt-30">{title}</h4>
      <p>{subtitle}</p>
    </a>
  );
}

export type MoreCategoryCardProps = {
  /** Big number/value rendered at the top of the card. */
  value: string;
  /** Caption shown under the value. */
  label: string;
  /** Link target for the whole card. Defaults to `#`. */
  href?: string;
  /** Decorative icon image `src`. */
  icon?: string;
  /** Alt text for the icon image. */
  iconAlt?: string;
};

/**
 * The trailing "more categories" card. Shares `card-style-eighteen` with
 * {@link CategoryCard} but uses the `more-item` variant markup.
 */
export function MoreCategoryCard({
  value,
  label,
  href = "#",
  icon = "jano/images/icon/icon_134.svg",
  iconAlt = "",
}: MoreCategoryCardProps) {
  return (
    <a
      href={href}
      className="card-style-eighteen more-item position-relative text-center tran3s mb-40"
    >
      <h3>{value}</h3>
      <p className="pb-20">{label}</p>
      <img src={icon} alt={iconAlt} className="m-auto" />
    </a>
  );
}
