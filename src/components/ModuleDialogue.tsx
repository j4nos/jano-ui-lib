import type { ReactNode } from "react";

export type ModuleDialogueItem = {
  role: "student" | "assistant";
  text: string;
};

type ModuleDialogueProps = {
  items: ReadonlyArray<ModuleDialogueItem>;
  className?: string;
  children?: ReactNode;
};

export function ModuleDialogue({
  items,
  className = "pe-40 lg-pe-0",
  children,
}: ModuleDialogueProps) {
  return (
    <div className={`module-dialogue ${className}`.trim()}>
      {items.map((item, index) => (
        <p
          key={`${item.role}-${index}`}
          className="mb-20"
          style={item.role === "student" ? { marginLeft: 200 } : undefined}
        >
          {item.text}
        </p>
      ))}
      {children ? <div className="mt-30">{children}</div> : null}
    </div>
  );
}
