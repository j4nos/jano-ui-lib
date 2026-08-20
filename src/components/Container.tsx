import type { Fragment, ReactElement } from "react";
import type { BlogCommentForm } from "./BlogCommentForm";
import type { Row } from "./Row";
import type { StatusMessage } from "./StatusMessage";
import type { ProjectPaginationOne } from "./top-level/ProjectPaginationOne";
import type { YouTubeEmbed } from "./YouTubeEmbed";
import type { FancyShortBannerSixteenPanel } from "./FancyShortBannerSixteenPanel";

export type ContainerChild =
  | ReactElement<unknown, typeof Row>
  | ReactElement<unknown, typeof BlogCommentForm>
  | ReactElement<unknown, typeof StatusMessage>
  | ReactElement<unknown, typeof ProjectPaginationOne>
  | ReactElement<unknown, typeof YouTubeEmbed>
  | ReactElement<unknown, typeof FancyShortBannerSixteenPanel>;

export type ContainerChildren =
  | ContainerChild
  | Array<ContainerChild | null | false>
  | ReactElement<
      {
        children?: ContainerChild | null | Array<ContainerChild | null | false>;
      },
      typeof Fragment
    >;

type ContainerProps = {
  children: ContainerChildren;
  /** Use the full-width `container-fluid` variant instead of `container`. */
  fluid?: boolean;
  className?: string;
};

export function Container({
  children,
  fluid = false,
  className = "",
}: ContainerProps) {
  const base = fluid ? "container-fluid" : "container";
  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}
