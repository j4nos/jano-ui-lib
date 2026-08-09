"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { Block } from "./Block";
import { Button } from "./Button";

export type YouTubeEmbedProps = {
  /** The video's own ID (the `v=` value), not the full watch URL — e.g.
   * "PVNITp8vzF0" from https://www.youtube.com/watch?v=PVNITp8vzF0. */
  videoId: string;
  /** Accessible title for the loaded iframe. Default: "YouTube video". */
  title?: string;
  /** Max width in px of the player, centered. Default: 960. */
  maxWidth?: number;
  /** CSS aspect-ratio of the player box. Default: "16 / 9". */
  aspectRatio?: string;
  /** Extra class names on the outer wrapper. */
  className?: string;
  /** Extra inline styles on the outer wrapper, merged after the built-in
   * sizing/aspect-ratio styles (so callers can override them if needed). */
  style?: CSSProperties;
};

/**
 * Click-to-play YouTube embed: renders the video's own thumbnail with a
 * play button overlay instead of a live YouTube iframe up front, and only
 * mounts the real iframe (with autoplay=1) once clicked. YouTube's embed
 * loads a fair amount of its own JS/trackers even while paused, so this
 * defers all of that until the visitor actually wants to watch — cheaper
 * for every visitor who never clicks play, which on a marketing page is
 * most of them.
 *
 * Built from this library's own generic wrappers (Block, Button) rather
 * than raw <div>/<button>. Button's default theme (btn-twentyTwo — fixed
 * padding/background/line-height at `body` specificity, see this
 * package's style.css) is overridden via inline `style`, which wins over
 * that class, so the play control renders as a plain circular overlay on
 * top of the thumbnail rather than a themed pill/rect button.
 */
export function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  maxWidth = 960,
  aspectRatio = "16 / 9",
  className,
  style,
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Block
      className={className}
      style={{
        position: "relative",
        maxWidth,
        aspectRatio,
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#000",
        marginLeft: "auto",
        marginRight: "auto",
        ...style,
      }}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      ) : (
        <Button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${title}`}
          className="position-relative w-100 h-100 d-block"
          style={{
            cursor: "pointer",
            padding: 0,
            lineHeight: "normal",
            background: "transparent",
            border: 0,
            borderRadius: 0,
          }}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            className="w-100 h-100"
            style={{ objectFit: "cover", display: "block" }}
            onError={(event) => {
              // Not every video has a maxres thumbnail — hqdefault always
              // exists, just lower resolution.
              (event.currentTarget as HTMLImageElement).src =
                `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          <Block
            className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
            }}
          >
            <i
              className="bi bi-play-fill"
              style={{ fontSize: 36, color: "#111", marginLeft: 4 }}
            />
          </Block>
        </Button>
      )}
    </Block>
  );
}
