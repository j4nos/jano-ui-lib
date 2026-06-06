"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BrandWordmark } from "../BrandWordmark";
import { ToastIndicator } from "../ToastIndicator";
import type { BrandWordmarkProps } from "../BrandWordmark";

export type HeaderMenuItem = {
  label: string;
  href?: string;
  suffix?: string;
  exact?: boolean;
  action?: "logout";
};

export type HeaderMenuGroup = {
  label: string;
  items: readonly HeaderMenuItem[];
};

type HeaderTone = "light" | "dark";

export type HeaderBrandProps = Omit<BrandWordmarkProps, "href">;

type HeaderProps = {
  brand: HeaderBrandProps;
  brandHref?: string;
  tone?: HeaderTone;
  showNav?: boolean;
  menuGroups?: readonly HeaderMenuGroup[];
  menuBasePath?: string;
  mobileAction?: ReactNode;
  navLabel?: string;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  userDisplayName?: string;
  onLogout?: () => void | Promise<void>;
};

function resolveMenuBaseHref(pathname: string, menuBasePath: string) {
  const baseIndex = pathname.indexOf(menuBasePath);
  if (baseIndex === -1) {
    return menuBasePath.endsWith("/")
      ? menuBasePath.slice(0, -1)
      : menuBasePath;
  }

  const rest = pathname.slice(baseIndex + menuBasePath.length);
  const baseSegment = rest.split("/")[0];
  return `${menuBasePath}${baseSegment}`.replace(/\/$/, "");
}

function resolveItemHref(
  pathname: string,
  item: HeaderMenuItem,
  menuBasePath?: string,
) {
  if (item.href) return item.href;
  if (item.suffix && menuBasePath) {
    return `${resolveMenuBaseHref(pathname, menuBasePath)}${item.suffix}`;
  }
  return "#";
}

function isItemActive(
  pathname: string,
  item: HeaderMenuItem,
  menuBasePath?: string,
) {
  const href = resolveItemHref(pathname, item, menuBasePath);
  if (href === "#") return false;
  if (item.exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({
  brand,
  brandHref = "/",
  tone = "light",
  showNav = true,
  menuGroups = [],
  menuBasePath,
  mobileAction,
  navLabel = "Primary navigation",
  isAuthenticated = false,
  isAdmin = false,
  userDisplayName = "",
  onLogout,
}: HeaderProps) {
  const pathname = usePathname();
  const isLightTone = tone === "light";

  const resolvedMenuGroups = menuGroups
    .filter((group) => {
      if (!isAuthenticated) {
        return (
          group.label !== "Recruiter" &&
          group.label !== "Platform Admin" &&
          group.label !== "Account"
        );
      }

      if (group.label === "Platform Admin") {
        return isAdmin;
      }

      return true;
    })
    .map((group) =>
      group.label === "Access"
        ? {
            ...group,
            items: isAuthenticated
              ? [{ label: "Logout", action: "logout" as const }]
              : group.items,
          }
        : group,
    );

  return (
    <>
      <header
        className={
          isLightTone
            ? "theme-main-menu sticky-menu theme-menu-seven white-vr"
            : "theme-main-menu sticky-menu theme-menu-eight border-bottom"
        }
      >
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <BrandWordmark {...brand} href={brandHref} />
            </div>

            <div className="right-widget ms-auto ms-lg-0 d-flex align-items-center order-lg-3">
              {isAuthenticated && userDisplayName ? (
                <span
                  className={`fw-500 ${isLightTone ? "text-white" : "tx-dark"}`}
                >
                  {userDisplayName}
                </span>
              ) : null}
            </div>

            {showNav && resolvedMenuGroups.length > 0 ? (
              <nav
                className="navbar navbar-expand-lg order-lg-2"
                aria-label={navLabel}
              >
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    {resolvedMenuGroups.map((group) => {
                      const activeItem = group.items.find((item) =>
                        isItemActive(pathname, item, menuBasePath),
                      );

                      return (
                        <li className="nav-item dropdown" key={group.label}>
                          <a
                            className={`nav-link dropdown-toggle ${activeItem ? "active" : ""}`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                          >
                            {group.label}
                          </a>
                          <ul className="dropdown-menu">
                            {group.items.map((item) => {
                              const href = resolveItemHref(
                                pathname,
                                item,
                                menuBasePath,
                              );
                              const active = isItemActive(
                                pathname,
                                item,
                                menuBasePath,
                              );
                              return (
                                <li key={item.label}>
                                  {item.action === "logout" ? (
                                    <button
                                      type="button"
                                      className="dropdown-item"
                                      onClick={() => {
                                        void onLogout?.();
                                      }}
                                    >
                                      <span>{item.label}</span>
                                    </button>
                                  ) : (
                                    <Link
                                      href={href}
                                      className={`dropdown-item ${active ? "active" : ""}`}
                                      aria-current={active ? "page" : undefined}
                                    >
                                      <span>{item.label}</span>
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                  {mobileAction ? (
                    <div className="mobile-content d-block d-lg-none">
                      <div className="d-flex flex-column align-items-center justify-content-center mt-70">
                        {mobileAction}
                      </div>
                    </div>
                  ) : null}
                </div>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
      <ToastIndicator />
    </>
  );
}
