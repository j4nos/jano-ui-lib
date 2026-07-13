import type { ReactElement } from "react";
import { Button } from "./Button";

export type SidebarRecentNewsItem = {
  id: string;
  title: string;
  subtitle: string;
  selected?: boolean;
  onClick?: () => void;
};

export type SidebarRecentNewsProps = {
  title?: string;
  items?: SidebarRecentNewsItem[];
  hasMore?: boolean;
  loadingMore?: boolean;
  onLoadMore?: () => void;
};

export function SidebarRecentNews(props: SidebarRecentNewsProps): ReactElement {
  const { title = "Recent News", items, hasMore, loadingMore, onLoadMore } = props;

  // Fallback to hardcoded demo content when no items provided
  if (!items) {
    return (
      <div className="sidebar-recent-news mb-60 md-mb-50">
        <h4 className="sidebar-title">{title}</h4>
        <div className="news-block d-flex align-items-center pt-20 pb-20 border-top">
          <div>
            <img
              src="/jano/images/blog/blog_img_17.jpg"
              alt=""
            />
          </div>
          <div className="post ps-4">
            <h4 className="mb-5">
              <a href="blog-details.html" className="title tran3s">
                10 days quick challange forboost visitors.
              </a>
            </h4>
            <div className="date">23 July, 2022</div>
          </div>
        </div>
        <div className="news-block d-flex align-items-center pt-20 pb-20 border-top">
          <div>
            <img
              src="/jano/images/blog/blog_img_18.jpg"
              alt=""
            />
          </div>
          <div className="post ps-4">
            <h4 className="mb-5">
              <a href="blog-details.html" className="title tran3s">
                Easy way to boost your business.
              </a>
            </h4>
            <div className="date">23 July, 2022</div>
          </div>
        </div>
        <div className="news-block d-flex align-items-center pt-20 pb-20 border-top border-bottom">
          <div>
            <img
              src="/jano/images/blog/blog_img_19.jpg"
              alt=""
            />
          </div>
          <div className="post ps-4">
            <h4 className="mb-5">
              <a href="blog-details.html" className="title tran3s">
                Introducing new tools for your design.
              </a>
            </h4>
            <div className="date">23 July, 2022</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sidebar-recent-news mb-60 md-mb-50">
      <h4 className="sidebar-title">{title}</h4>
      {items.length === 0 && (
        <p className="text-muted small pt-20">No results.</p>
      )}
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`news-block d-flex align-items-center pt-20 pb-20 border-top${
            !hasMore && i === items.length - 1 ? " border-bottom" : ""
          }`}
          style={item.onClick ? { cursor: "pointer" } : undefined}
          onClick={item.onClick}
        >
          <div className="post">
            <h4 className="mb-5" style={{ fontWeight: item.selected ? 700 : undefined }}>
              <span className={`title tran3s${item.selected ? " text-primary" : ""}`}>
                {item.title}
              </span>
            </h4>
            <div className="date">{item.subtitle}</div>
          </div>
        </div>
      ))}
      {hasMore && (
        <div className="pt-20 pb-20 border-top border-bottom">
          <Button
            type="button"
            tone="pill"
            withTopMargin={false}
            onClick={onLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </div>
  );
}
