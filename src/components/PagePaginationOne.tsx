"use client";

import Link from "next/link";

type PagePaginationOneProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  className?: string;
};

type PaginationToken =
  | { type: "page"; value: number }
  | { type: "ellipsis" }
  | { type: "last-label" };

function buildTokens(currentPage: number, totalPages: number): PaginationToken[] {
  if (totalPages <= 1) return [];
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => ({
      type: "page" as const,
      value: index + 1,
    }));
  }

  if (currentPage <= 3) {
    return [
      { type: "page", value: 1 },
      { type: "page", value: 2 },
      { type: "page", value: 3 },
      { type: "page", value: 4 },
      { type: "ellipsis" },
      { type: "last-label" },
    ];
  }

  if (currentPage >= totalPages - 2) {
    return [
      { type: "page", value: totalPages - 3 },
      { type: "page", value: totalPages - 2 },
      { type: "page", value: totalPages - 1 },
      { type: "page", value: totalPages },
    ];
  }

  return [
    { type: "page", value: currentPage - 1 },
    { type: "page", value: currentPage },
    { type: "page", value: currentPage + 1 },
    { type: "ellipsis" },
    { type: "last-label" },
  ];
}

function createPageHref(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}?page=${page}`;
}

export function PagePaginationOne({
  currentPage,
  totalPages,
  basePath,
  className = "mt-70",
}: PagePaginationOneProps) {
  if (totalPages <= 1) return null;

  const tokens = buildTokens(currentPage, totalPages);
  const nextPage = Math.min(currentPage + 1, totalPages);

  return (
    <nav
      className={`page-pagination-one text-center ${className}`.trim()}
      aria-label="Pagination"
    >
      <ul className="d-inline-flex align-items-center justify-content-center style-none m0">
        {tokens.map((token, index) => {
          if (token.type === "ellipsis") {
            return <li key={`ellipsis-${index}`}>...</li>;
          }

          if (token.type === "last-label") {
            return (
              <li key="last-link">
                <Link href={createPageHref(basePath, totalPages)}>Last</Link>
              </li>
            );
          }

          const isActive = token.value === currentPage;
          return (
            <li
              key={token.value}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
            >
              <Link href={createPageHref(basePath, token.value)}>
                {token.value}
              </Link>
            </li>
          );
        })}
        <li className="arrow">
          <Link
            href={createPageHref(basePath, nextPage)}
            aria-label={currentPage < totalPages ? "Next page" : "Last page"}
          >
            <i className="bi bi-arrow-right"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
