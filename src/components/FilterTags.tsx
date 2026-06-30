export type FilterTagProps = {
  label: string;
  onRemove?: () => void;
};

export function FilterTag({ label, onRemove }: FilterTagProps) {
  return (
    <li className="d-inline-flex align-items-center">
      <span>{label}</span>
      {onRemove && (
        <button
          type="button"
          className="tag-remove-btn ms-1"
          aria-label={`Remove ${label}`}
          onClick={onRemove}
        >
          ×
        </button>
      )}
    </li>
  );
}

export type FilterTagsProps = {
  tags: string[];
  onRemove?: (tag: string, index: number) => void;
  label?: string;
  className?: string;
};

export function FilterTags({
  tags,
  onRemove,
  label = "Szűrők:",
  className = "",
}: FilterTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul className={`d-flex flex-wrap gap-2 tags style-none pb-20 ${className}`.trim()}>
      <li className="fw-bold">{label}</li>
      {tags.map((tag, i) => (
        <FilterTag
          key={tag}
          label={tag}
          onRemove={onRemove ? () => onRemove(tag, i) : undefined}
        />
      ))}
    </ul>
  );
}
