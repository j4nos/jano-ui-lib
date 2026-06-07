export type CheckmarkListItem = string;

export type CheckmarkColor = "gray" | "pink" | "green" | "red";

type CheckmarkListProps = {
  items: readonly CheckmarkListItem[];
  listClassName?: string;
  itemClassName?: string;
  checkColor?: CheckmarkColor;
};

export function CheckmarkList({
  items,
  listClassName = "style-none list-item",
  itemClassName = "",
  checkColor = "pink",
}: CheckmarkListProps) {
  if (!items.length) return null;

  return (
    <ul className={`${listClassName} check-${checkColor}`}>
      {items.map((item) => (
        <li key={item} className={itemClassName || undefined}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
