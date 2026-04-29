"use client";

import type { ReactElement } from "react";
import { BlogCommentForm } from "./BlogCommentForm";
import { BlogSectionSevenColumn } from "./BlogSectionSevenColumn";
import { DataCardGrid } from "./DataCardGrid";
import type { DataCardGridProps } from "./DataCardGrid";
import { TitleStyleThree } from "./TitleStyleThree";
import type { TitleStyleThreeProps } from "./TitleStyleThree";
import type { BlogSectionSevenColumnProps } from "./BlogSectionSevenColumn";

export type BlogSectionSevenBlock =
  | ReactElement<TitleStyleThreeProps, typeof TitleStyleThree>
  | ReactElement<DataCardGridProps, typeof DataCardGrid>
  | ReactElement<any, typeof BlogCommentForm>
  | ReactElement<BlogSectionSevenColumnProps, typeof BlogSectionSevenColumn>;

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
