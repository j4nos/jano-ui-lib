export type TagsProps = {
  tags: string[];
  label?: string;
  className?: string;
};

export function Tags({ tags, label = "Tag:", className = "" }: TagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="blog-details-one">
      <div className="blog-details-content">
        <div className="bottom-widget">
          <ul className={`d-flex tags style-none pb-20 ${className}`.trim()}>
            <li>{label}</li>
            {tags.map((tag, i) => (
              <li key={tag}>
                <a href="#">{tag}</a>
                {i < tags.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
