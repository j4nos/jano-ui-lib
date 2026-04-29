"use client";

import { Fieldset } from "./Fieldset";

type RadioGroupFieldProps = {
  name: string;
  legend: string;
  description?: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  className?: string;
  legendClassName?: string;
  choicesClassName?: string;
  choiceClassName?: string;
  choiceLockedClassName?: string;
  controlClassName?: string;
  dotClassName?: string;
  dotActiveClassName?: string;
};

export function RadioGroupField({
  name,
  legend,
  description,
  options,
  value,
  disabled,
  onChange,
  className,
  legendClassName,
  choicesClassName,
  choiceClassName,
  choiceLockedClassName,
  controlClassName,
  dotClassName,
  dotActiveClassName,
}: RadioGroupFieldProps) {
  return (
    <Fieldset
      className={className}
      legendClassName={legendClassName}
      legend={legend}
    >
      {description ? <p>{description}</p> : null}
      <div className={choicesClassName}>
        {options.map((option) => {
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              className={`${choiceClassName || ""} ${disabled ? choiceLockedClassName || "" : ""}`}
            >
              <span className={controlClassName} aria-hidden="true">
                <span className={checked ? dotActiveClassName : dotClassName} />
              </span>
              <span>{option.label}</span>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                disabled={disabled}
                onChange={() => onChange(option.value)}
              />
            </label>
          );
        })}
      </div>
    </Fieldset>
  );
}
