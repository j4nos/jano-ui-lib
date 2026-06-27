"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type PageSubnavItem = {
  slug: string;
  label: string;
  href: string;
};

type PageSubnavProps = {
  items: PageSubnavItem[];
  /** Override active detection — use when active state comes from search params rather than pathname. */
  activeSlug?: string;
  className?: string;
  /** Top padding of the section in px. Default: 0. */
  paddingTop?: number;
};

export function PageSubnav({
  items,
  activeSlug,
  className,
  paddingTop = 0,
}: PageSubnavProps) {
  const pathname = usePathname();

  return (
    <section
      style={{ position: "relative", zIndex: 1, paddingTop }}
      className={className}
    >
      <div className="container">
        <div
          className="g-control-nav-two text-center"
          role="tablist"
          style={{ margin: "0 0 60px" }}
        >
          {items.map((item) => {
            const isActive = activeSlug != null
              ? activeSlug === item.slug
              : pathname === item.href;

            return (
              <Link
                key={item.slug}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "is-checked" : undefined}
                style={{
                  display: "inline-block",
                  background: "transparent",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  fontSize: 15,
                  letterSpacing: 1,
                  color: "#313131",
                  padding: "0 8px",
                  lineHeight: "31px",
                  border: "2px solid transparent",
                  borderColor: isActive ? "#313131" : "transparent",
                  margin: "0 12px",
                  cursor: "pointer",
                  transition: "border-color .25s ease, color .25s ease",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
