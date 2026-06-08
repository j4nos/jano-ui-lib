export type BlogComment = {
  /** Stable key; falls back to the array index when omitted. */
  id?: string;
  /** The comment body (the only required field). */
  message: string;
  /** Commenter name — hidden when omitted. */
  name?: string;
  /** Avatar image URL — the avatar is hidden when omitted. */
  avatarSrc?: string;
  /** Avatar alt text. */
  avatarAlt?: string;
  /** Formatted date string — hidden when omitted. */
  date?: string;
  /** Whether the Reply link is shown for this comment. Defaults to false. */
  showReply?: boolean;
  /** Reply link label. */
  replyLabel?: string;
  /** Reply link href. */
  replyHref?: string;
};

type BlogCommentAreaProps = {
  comments?: readonly BlogComment[];
  /** Heading above the list. Defaults to "{n} Comments". */
  title?: string;
  className?: string;
};

export default function BlogCommentArea({
  comments = [],
  title,
  className = "blog-comment-area",
}: BlogCommentAreaProps) {
  const heading =
    title ??
    `${comments.length} ${comments.length === 1 ? "Comment" : "Comments"}`;

  return (
    <div className={className}>
      <h3 className="blog-inner-title tx-dark pb-15">{heading}</h3>
      {comments.map((comment, index) => (
        <div key={comment.id ?? index} className="comment d-flex">
          {comment.avatarSrc ? (
            <img
              src={comment.avatarSrc}
              alt={comment.avatarAlt ?? ""}
              className="user-avatar rounded-circle"
            />
          ) : null}
          <div className="comment-text">
            {comment.name ? (
              <div className="name fw-500 tx-dark">{comment.name}</div>
            ) : null}
            {comment.date ? <div className="date">{comment.date}</div> : null}
            <p>{comment.message}</p>
            {comment.showReply ? (
              <a
                href={comment.replyHref ?? "#"}
                className="reply-btn fw-500 tran3s"
              >
                {comment.replyLabel ?? "Reply"}
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
