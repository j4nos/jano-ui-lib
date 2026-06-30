import type { ReactElement } from "react";

export type SidebarRecentNewsProps = Record<string, never>;

export function SidebarRecentNews(
  _props: SidebarRecentNewsProps,
): ReactElement {
  return (
    <div className="sidebar-recent-news mb-60 md-mb-50">
      <h4 className="sidebar-title">Recent News</h4>
      <div className="news-block d-flex align-items-center pt-20 pb-20 border-top">
        <div>
          <img
            src="jano/images/lazy.svg"
            data-src="jano/images/blog/blog_img_17.jpg"
            alt=""
            className="lazy-img"
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
            src="jano/images/lazy.svg"
            data-src="jano/images/blog/blog_img_18.jpg"
            alt=""
            className="lazy-img"
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
            src="jano/images/lazy.svg"
            data-src="jano/images/blog/blog_img_19.jpg"
            alt=""
            className="lazy-img"
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
