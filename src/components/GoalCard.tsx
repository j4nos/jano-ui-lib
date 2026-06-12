export type GoalCardProps = {
  tier: string;
  title: string;
  level: string;
  classes: string;
  badge: string;
  href?: string;
};

export function GoalCard({
  tier,
  title,
  level,
  classes,
  badge,
  href,
}: GoalCardProps) {
  return (
    <a
      href={href ?? "#"}
      className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
    >
      <span className="tag fw-500 text-white text-uppercase">{tier}</span>
      <h4 className="mb-0 mt-25">
        {title.includes(" & ") ? (
          <>
            {title.split(" & ")[0]} &amp; <br /> {title.split(" & ")[1]}
          </>
        ) : (
          title
        )}
      </h4>
      <ul className="style-none pb-40 lg-pb-20 d-flex justify-content-between">
        <li>{level}</li>
        <li>{classes}</li>
      </ul>
      <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
        {badge}
      </span>
    </a>
  );
}
