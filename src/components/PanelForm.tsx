import { Fragment, type ComponentPropsWithoutRef, type ReactElement } from "react";
import { Button } from "./Button";
import { FormSubmitButton } from "./FormSubmitButton";
import { ImageUploadField } from "./forms/ImageUploadField";
import { SelectField } from "./forms/SelectField";
import { TextAreaField } from "./forms/TextAreaField";
import { TextInputField } from "./forms/TextInputField";

type PanelFormLeaf =
  | ReactElement<unknown, typeof TextInputField>
  | ReactElement<unknown, typeof SelectField>
  | ReactElement<unknown, typeof TextAreaField>
  | ReactElement<unknown, typeof ImageUploadField>
  | ReactElement<unknown, typeof FormSubmitButton>
  | ReactElement<unknown, typeof Button>
  | ReactElement<unknown, "input">;

type PanelFormChildren =
  | PanelFormLeaf
  | Array<PanelFormLeaf | null>
  | ReactElement<
      {
        children?: PanelFormLeaf | null | Array<PanelFormLeaf | null>;
      },
      typeof Fragment
    >;

type PanelFormProps = {
  action?: ComponentPropsWithoutRef<"form">["action"];
  children: PanelFormChildren;
  className?: string;
};

export function PanelForm({
  action,
  children,
  className = "mt-30",
}: PanelFormProps) {
  return (
    <form className={className} action={action}>
      {children}
    </form>
  );
}
