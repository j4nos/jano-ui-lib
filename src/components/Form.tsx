import { Fragment, type ComponentPropsWithoutRef, type ReactElement } from "react";
import { Button } from "./Button";
import { Column } from "./Column";
import { FormSubmitButton } from "./FormSubmitButton";
import { Row } from "./Row";
import { AuthInputField } from "./auth/AuthInputField";
import { AuthPasswordField } from "./auth/AuthPasswordField";
import { CheckboxField } from "./forms/CheckboxField";
import { FileInputField } from "./forms/FileInputField";
import { ImageUploadField } from "./forms/ImageUploadField";
import { RadioGroupField } from "./forms/RadioGroupField";
import { SelectField } from "./forms/SelectField";
import { TextAreaField } from "./forms/TextAreaField";
import { TextInputField } from "./forms/TextInputField";

export type FormChild =
  | ReactElement<unknown, typeof TextInputField>
  | ReactElement<unknown, typeof TextAreaField>
  | ReactElement<unknown, typeof SelectField>
  | ReactElement<unknown, typeof FileInputField>
  | ReactElement<unknown, typeof RadioGroupField>
  | ReactElement<unknown, typeof ImageUploadField>
  | ReactElement<unknown, typeof CheckboxField>
  | ReactElement<unknown, typeof AuthInputField>
  | ReactElement<unknown, typeof AuthPasswordField>
  | ReactElement<unknown, typeof Row>
  | ReactElement<unknown, typeof Column>
  | ReactElement<unknown, typeof FormSubmitButton>
  | ReactElement<unknown, typeof Button>;

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
