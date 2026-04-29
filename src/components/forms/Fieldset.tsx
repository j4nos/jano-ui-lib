"use client";

import type { ReactNode } from "react";

type FieldsetProps = {
  legend?: string;
  children: ReactNode;
  className?: string;
  legendClassName?: string;
};

export function Fieldset({
  legend,
  children,
  className,
  legendClassName,
}: FieldsetProps) {
  return (
    <fieldset className={className}>
      {legend ? <legend className={legendClassName}>{legend}</legend> : null}
      {children}
    </fieldset>
  );
}
