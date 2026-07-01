import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode } from "react";

type ListItemProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  role?: string;
  tabIndex?: number;
  ariaDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLLIElement>) => void;
  /** Fires before blur on a sibling input — use for dropdown/option-list
   * selection so it beats the input's onBlur closing the list first. */
  onMouseDown?: (event: MouseEvent<HTMLLIElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLLIElement>) => void;
};

/**
 * Generic list item that renders an `li`, forwarding the interaction props
 * needed for clickable / keyboard-navigable items. Use instead of a native `<li>`.
 */
export function ListItem({
  children,
  className,
  style,
  role,
  tabIndex,
  ariaDisabled,
  onClick,
  onMouseDown,
  onKeyDown,
}: ListItemProps) {
  return (
    <li
      className={className || undefined}
      style={style}
      role={role}
      tabIndex={tabIndex}
      aria-disabled={ariaDisabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
    >
      {children}
    </li>
  );
}
