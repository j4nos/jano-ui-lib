export type FilterTagProps = {
  label: string;
  onRemove?: () => void;
};

export function FilterTag({ label, onRemove }: FilterTagProps) {
  return (
    <li className="d-inline-flex align-items-center badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2">
      <span>{label}</span>
      {onRemove && (
        <button
          type="button"
          className="tag-remove-btn ms-2 border-0 bg-transparent p-0 text-primary"
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
