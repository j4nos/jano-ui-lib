"use client";

import type { ReactNode } from "react";
import Link from "next/link";

export type BlogSidebarCategoryItem = {
  id: string;
  label: ReactNode;
  /** Optional trailing count, rendered like "(3)" on the reference page. */
  count?: number;
  /**
   * Required for real navigation. Rendered with next/link so it's a
   * client-side transition, not a full page reload — see PageSubnav, which
   * uses the same approach for exactly this reason.
   */
  href: string;
  onClick?: () => void;
  /** Highlights the item as the current selection (bold + accent color). */
  active?: boolean;
};

export type BlogSidebarCategoryProps = {
  title?: string;
  items: BlogSidebarCategoryItem[];
  className?: string;
};

// Plain clickable `ul.style-none` list, matching the theme's
// `.blog-sidebar-category` block (see the "Category" list on the reference
// blog-details page: https://jano-nextjs.netlify.app/blog/1). Deliberately
// has no accordion/expand-collapse behavior — each item is just a link.
// Stack one instance per navigation level (e.g. curriculum, then level, then
// topic) inside a single <BlogSidebar>, each with its own title/items.
export function BlogSidebarCategory({
  title = "Category",
  items,
  className = "blog-sidebar-category mb-60 md-mb-50",
}: BlogSidebarCategoryProps) {
  return (
    <div className={className}>
      <h4 className="sidebar-title">{title}</h4>
      <ul className="style-none">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={item.onClick}
              aria-current={item.active ? "page" : undefined}
              // Matches PageSubnav's active-state color (#313131, near-black)
              // instead of the unstyled Bootstrap "text-primary" blue
              // (--bs-primary, never overridden by the theme), so selection
              // looks consistent across both nav styles.
              style={item.active ? { fontWeight: 700, color: "#313131" } : undefined}
            >
              {item.label}
              {item.count != null && (
                <span className="float-end">({item.count})</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
