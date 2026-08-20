"use client";

import type { ReactElement } from "react";
import { Form } from "../Form";
import { BlogSectionSevenColumn } from "../BlogSectionSevenColumn";
import { DataCardGrid } from "../DataCardGrid";
import FancyFeatureFortyOneAccordion from "../FancyFeatureFortyOneAccordion";
import type { DataCardGridProps } from "../DataCardGrid";
import { TitleStyleThree } from "../TitleStyleThree";
import type { TitleStyleThreeProps } from "../TitleStyleThree";
import type { BlogSectionSevenColumnProps } from "../BlogSectionSevenColumn";
import type { FancyFeatureFortyOneAccordionProps } from "../FancyFeatureFortyOneAccordion";

export type BlogSectionSevenBlock =
  | ReactElement<TitleStyleThreeProps, typeof TitleStyleThree>
  | ReactElement<DataCardGridProps, typeof DataCardGrid>
  | ReactElement<any, typeof Form>
  | ReactElement<BlogSectionSevenColumnProps, typeof BlogSectionSevenColumn>
  | ReactElement<FancyFeatureFortyOneAccordionProps, typeof FancyFeatureFortyOneAccordion>;

type BlogSectionSevenProps = {
  blocks: BlogSectionSevenBlock[];
  className?: string;
};

export function BlogSectionSeven({ blocks, className = "" }: BlogSectionSevenProps) {
  return (
    <div
      className={`blog-section-seven position-relative mt-150 lg-mt-90 ${className}`.trim()}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-11 m-auto">
            {blocks.map((block, index) => (
              <div key={index}>{block}</div>
            ))}
          </div>
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </div>
  );
}
