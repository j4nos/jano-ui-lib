# jano-ui-lib

Reusable, typed Next.js (App Router) UI components from the Jano / Snoopyon
theme. Presentational only — no CSS/fonts/data bundled.

## Prerequisite: buy the Jano template

The components render Jano theme classes but ship **no assets**. Buy the
template — **https://jano-nextjs.netlify.app** — and copy these folders into
`public/jano/` of your app (keep the names so the CSS's relative URLs resolve):

```
public/jano/  →  css/  fonts/  images/  vendor/
```

## Install

```bash
npm install jano-ui-lib@github:j4nos/jano-ui-lib
```

Pins to the current commit. To upgrade after the lib changes, re-run the same
command and commit `package-lock.json`.

> **CI note:** pushing the lib is not enough — the app pins a commit SHA. After
> pushing here, re-run the install in the app and commit the lockfile, or
> `npm ci` keeps the old commit (causing "no exported member" errors).

Peer deps: `next >=14 <16`, `react`/`react-dom >=18 <20`.

## Setup (Amplify Gen 2 / Next.js App Router)

Load the theme CSS and the Bootstrap bundle (needed for the `Header` menu) in
the root layout:

```tsx
// app/layout.tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/jano/css/style.css" />
        <link rel="stylesheet" href="/jano/css/responsive.css" />
      </head>
      <body>
        {/* main-page-wrapper is required by the theme CSS */}
        <div className="main-page-wrapper">{children}</div>
        <Script
          src="/jano/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
```

Presentational only: feed components from your own Amplify Data/Auth
view-models (e.g. `Header`'s `isAuthenticated` / `onLogout`).

## Usage

Everything imports from the root:

```tsx
import { Button, Form, Row, Column, TextInputField, FormSubmitButton } from "jano-ui-lib";

<Form onSubmit={handleSubmit}>
  <Row>
    <Column>
      <TextInputField htmlFor="email" label="Email" name="email" type="email" required />
    </Column>
    <Column>
      <FormSubmitButton>Send</FormSubmitButton>
    </Column>
  </Row>
</Form>;
```

- `Button`: `tone="pill"` (accent) or `tone="form"`; pass `href` to render a link.
- `Row` accepts only `Column` children; `Column` defaults to `col-12`.
- `Header` menu group `"Access"` collapses to `persist` items + Logout once
  signed in; `"Platform Admin"` shows only when `isAdmin`.
- `BlogCommentArea` takes a `comments` array — only `message` is required per
  comment (`name`, `avatarSrc`, `date`, `showReply` are optional).

## Components

Layout/primitives: `Button` `CtaButton` `CopyButton` `BrandWordmark` `Row`
`Column` `DataCardGrid` `StatusMessage` `ToastIndicator` `TitleStyleThree`
`PageSubnav` `CheckmarkList` `ModuleDialogue`.

Forms: `Form` `FormSubmitButton` `PanelForm` `Fieldset` `FormField`
`TextInputField` `TextAreaField` `SelectField` `CheckboxField` `RadioGroupField`
`FileInputField` `ImageUploadField`.

Auth: `AuthInputField` `AuthPasswordField` `AuthPageShell` `Login` `Signup`.

Blog/content: `BlogCommentArea` `BlogCommentForm` `BlogDetailsSection`
`BlogSectionFive` `BlogSectionSeven` `BlogSectionSevenColumn`
`BlogSidebarCategory` `BlogMetaSeven` `BlogMetaThree` `BlockStyleEight`.

Sections: `Header` `JanoFooter` `HeroBannerNine` `HeroBannerTwelve`
`FancyFeatureForty(One|OneAccordion)` `FancyFeatureThirty(One|Eight|Nine)`
`FancyFeatureThirteen` `FancyShortBannerSixteen` `FeedbackSectionTen`
`CompareTable` `PriceSectionThree` `PagePaginationOne` `ErrorPageContent`.

## Develop

```bash
npm run build      # tsc -> dist/ (runs on `prepare` for git installs)
npm run typecheck
```
