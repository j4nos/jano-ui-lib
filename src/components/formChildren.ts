import type { Fragment, ReactElement } from "react";
import type { Button } from "./Button";
import type { Column } from "./Column";
import type { FormSubmitButton } from "./FormSubmitButton";
import type { Row } from "./Row";
import type { AuthInputField } from "./auth/AuthInputField";
import type { AuthPasswordField } from "./auth/AuthPasswordField";
import type { CheckboxField } from "./forms/CheckboxField";
import type { FileInputField } from "./forms/FileInputField";
import type { ImageUploadField } from "./forms/ImageUploadField";
import type { RadioGroupField } from "./forms/RadioGroupField";
import type { SelectField } from "./forms/SelectField";
import type { TextAreaField } from "./forms/TextAreaField";
import type { TextInputField } from "./forms/TextInputField";

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
  | Array<FormChild | null | false>
  | ReactElement<
      {
        children?: FormChild | null | Array<FormChild | null | false>;
      },
      typeof Fragment
    >;
