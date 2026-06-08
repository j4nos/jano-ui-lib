import { Fragment, type ComponentPropsWithoutRef, type ReactElement } from "react";
import { Row } from "./Row";

// A Form may only contain Row elements directly. Each Row may only contain
// Column elements, and the actual form fields live inside the Columns.
// (Form -> Row -> Column -> fields)
export type FormChild = ReactElement<unknown, typeof Row>;

export type FormChildren =
  | FormChild
  | Array<FormChild | null>
  | ReactElement<
      {
        children?: FormChild | null | Array<FormChild | null>;
      },
      typeof Fragment
    >;

type FormProps = Omit<ComponentPropsWithoutRef<"form">, "children"> & {
  children: FormChildren;
};

export function Form({ className = "", children, ...props }: FormProps) {
  const classes = [className].filter(Boolean).join(" ");

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  );
}
