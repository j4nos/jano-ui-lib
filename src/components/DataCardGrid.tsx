import { Children, type ReactNode } from "react";

export type DataCardGridProps = {
  children: ReactNode;
};

export function DataCardGrid({ children }: DataCardGridProps) {
  return (
    <div className="row gx-xxl-5 gy-4 mt-10">
      {Children.map(children, (child, index) => {
        if (!child) {
          return null;
        }

        return (
          <div className="col-xl-6 col-md-6" key={index}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
