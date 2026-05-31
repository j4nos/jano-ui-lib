"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type FancyFeatureFortyOneAccordionItem = {
  title: string;
  description: ReactNode;
  defaultOpen?: boolean;
};

export type FancyFeatureFortyOneAccordionProps = {
  items: readonly FancyFeatureFortyOneAccordionItem[];
  accordionId?: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function FancyFeatureFortyOneAccordion({
  items,
  accordionId = "fancyFeatureFortyOneAccordion",
}: FancyFeatureFortyOneAccordionProps) {
  const [openIndex, setOpenIndex] = useState(() => {
    const defaultIndex = items.findIndex((item) => item.defaultOpen);
    return defaultIndex >= 0 ? defaultIndex : 0;
  });

  if (!items.length) return null;

  return (
    <div className="accordion accordion-style-six" id={accordionId}>
      {items.map((item, index) => {
        const itemSlug = slugify(item.title) || `item-${index + 1}`;
        const headingId = `${accordionId}-heading-${itemSlug}`;
        const collapseId = `${accordionId}-collapse-${itemSlug}`;
        const isOpen = openIndex === index;

        return (
          <div className="accordion-item" key={`${itemSlug}-${index}`}>
            <div className="accordion-header" id={headingId}>
              <button
                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                type="button"
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls={collapseId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {item.title}
              </button>
            </div>
            <div
              id={collapseId}
              className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
              aria-labelledby={headingId}
            >
              <div className="accordion-body">
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
