import type { KeyboardEvent, MouseEvent, ReactNode } from "react";

type ListItemProps = {
  children: ReactNode;
  className?: string;
  role?: string;
  tabIndex?: number;
  ariaDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLLIElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLLIElement>) => void;
};

/**
 * Generic list item that renders an `li`, forwarding the interaction props
 * needed for clickable / keyboard-navigable items. Use instead of a native `<li>`.
 */
export function ListItem({
  children,
  className,
  role,
  tabIndex,
  ariaDisabled,
  onClick,
  onKeyDown,
}: ListItemProps) {
  return (
    <li
      className={className || undefined}
      role={role}
      tabIndex={tabIndex}
      aria-disabled={ariaDisabled}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </li>
  );
}
