import type { ReactNode } from "react";

export type BlogSidebarProps = {
  children: ReactNode;
  className?: string;
};

// Wraps one or more sidebar blocks (e.g. BlogSidebarCategory,
// SidebarRecentNews) in the theme's `.blog-sidebar` container — matches the
// markup on the reference blog-details page, where `.blog-sidebar` holds
// several `.blog-sidebar-*` / `.sidebar-*` children stacked vertically, each
// spacing itself via its own `mb-*` class. Place this inside the sidebar
// column (e.g. `col-lg-4`) alongside the main content column; this
// component only renders the `.blog-sidebar` wrapper, not the column div.
export function BlogSidebar({
  children,
  className = "blog-sidebar md-mt-70",
}: BlogSidebarProps) {
  return <div className={className}>{children}</div>;
}
