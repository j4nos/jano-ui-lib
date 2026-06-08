import { Fragment, type ReactElement } from "react";
import { Column } from "./Column";

export type RowChild = ReactElement<unknown, typeof Column>;

export type RowChildren =
  | RowChild
  | Array<RowChild | null | false>
  | ReactElement<
      {
        children?: RowChild | null | Array<RowChild | null | false>;
      },
      typeof Fragment
    >;

type RowProps = {
  children: RowChildren;
  className?: string;
};

export function Row({ children, className = "" }: RowProps) {
  return <div className={`row ${className}`.trim()}>{children}</div>;
}
