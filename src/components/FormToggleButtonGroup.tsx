import type { ReactNode } from "react";
import { Flex } from "./Flex";
import { FormTogglePillButton } from "./FormTogglePillButton";

export type FormToggleButtonOption = {
  value: string;
  label: ReactNode;
};

type FormToggleButtonGroupProps = {
  options: FormToggleButtonOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  /** Clicking the already-active option clears the selection. Default: true. */
  allowClear?: boolean;
};

/**
 * The one component Form/BlogCommentForm/Column should be given when you
 * need a row of toggle/filter pill buttons (e.g. "Remote / Hybrid /
 * On-site"). Internally it's just a <Flex> of <FormTogglePillButton>s — this
 * wrapper exists so call sites never need a raw <button> (or a bare <Flex>,
 * which also isn't a form-safe child) directly inside a form.
 */
export function FormToggleButtonGroup({
  options,
  value,
  onChange,
  allowClear = true,
}: FormToggleButtonGroupProps) {
  return (
    <Flex wrap gap={2}>
      {options.map((option) => {
        const active = value === option.value;
        return (
          <FormTogglePillButton
            key={option.value}
            active={active}
            onClick={() => onChange(active && allowClear ? null : option.value)}
          >
            {option.label}
          </FormTogglePillButton>
        );
      })}
    </Flex>
  );
}
