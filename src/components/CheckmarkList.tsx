export type CheckmarkListItem = string;

type CheckmarkListProps = {
  items: readonly CheckmarkListItem[];
  listClassName?: string;
  itemClassName?: string;
};

export function CheckmarkList({
  items,
  listClassName = "style-none list-item",
  itemClassName = "",
}: CheckmarkListProps) {
  if (!items.length) return null;

  return (
    <ul className={listClassName}>
      {items.map((item) => (
        <li key={item} className={itemClassName || undefined}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
