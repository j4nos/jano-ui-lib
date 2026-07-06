import type { ReactNode } from "react";
import { PagePaginationOne } from "./PagePaginationOne";

export type CompareTableColumn = {
  /** Visible header label (typically a product / plan / provider name). */
  label: string;
  /** Optional class on the `<th>` (e.g. for highlighting the "us" column). */
  className?: string;
};

export type CompareTableRow = {
  /** Row header (the feature name). */
  label: string;
  /**
   * One value per column. `true` → checkmark cell, `false` → blank cell.
   * Pass a `ReactNode` to render any custom content (text, alt icon, etc.).
   */
  values: Array<boolean | ReactNode>;
  /** Optional class on the row's `<tr>` (e.g. for de-emphasising rows). */
  className?: string;
};

type CompareTableProps = {
  columns: CompareTableColumn[];
  rows: CompareTableRow[];
  /** Header text for the row-label column (first `<th>`, blank by default). */
  rowHeaderLabel?: string;
  /** Optional title rendered above the table (matching the Jano `title-style-seven` pattern). */
  title?: ReactNode;
  /** Optional eyebrow under/over the title. */
  eyebrow?: string;
  /** Custom checkmark icon. Defaults to a built-in inline SVG. */
  checkmark?: ReactNode;
  /** Wrapper class on the outermost `<div class="hosting-compare-table">`. */
  className?: string;
  pagination?: {
    currentPage: number;
    totalPages: number;
    basePath: string;
    className?: string;
  };
};

const DEFAULT_CHECKMARK = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
    style={{ display: "block", margin: "0 auto" }}
  >
    <circle cx="12" cy="12" r="11" fill="var(--prime-ten, #111111)" />
    <path
      d="M7 12.5l3 3 7-7"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Snoopyon port of the Jano `hosting-compare-table` / `compare-table` feature
 * matrix. Configure with `columns` (providers / plans) and `rows` (features),
 * and the component renders a Bootstrap-table inside a `.table-responsive`
 * wrapper, matching the template markup so the existing CSS picks it up.
 */
export function CompareTable({
  columns,
  rows,
  rowHeaderLabel,
  title,
  eyebrow,
  checkmark = DEFAULT_CHECKMARK,
  className = "mt-150 lg-mt-100",
  pagination,
}: CompareTableProps) {
  return (
    <div className={`hosting-compare-table ${className}`.trim()}>
      <div className="container">
        {title || eyebrow ? (
          <div className="row">
            <div className="col-xxl-9 col-md-9 m-auto">
              <div className="title-style-seven text-center">
                {eyebrow ? <div className="sc-title">{eyebrow}</div> : null}
                {title ? (
                  <h2 className="main-title fw-bold tx-dark">{title}</h2>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        <div className="compare-table border-bottom pb-100 lg-pb-40 mt-80 lg-mt-40">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>{rowHeaderLabel}</th>
                  {columns.map((column) => (
                    <th key={column.label} className={column.className}>
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className={row.className}>
                    <th scope="row">{row.label}</th>
                    {columns.map((column, columnIndex) => {
                      const value = row.values[columnIndex];
                      const cellContent =
                        typeof value === "boolean"
                          ? value
                            ? checkmark
                            : null
                          : (value ?? null);
                      return (
                        <td key={`${row.label}-${column.label}`}>
                          {cellContent}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pagination && pagination.totalPages > 1 ? (
            <PagePaginationOne
              className={pagination.className ?? "mt-40"}
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              basePath={pagination.basePath}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
