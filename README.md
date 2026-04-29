# jano-ui-lib

Reusable Next.js UI components extracted from the Snoopyon app.

## Scope

This package contains the presentational layer only:

- buttons
- card/grid blocks
- form fields
- auth field primitives
- education / landing page sections
- generic header / pagination / subnav patterns

It intentionally excludes Snoopyon-specific app glue such as:

- Amplify auth wrappers
- login/signup page view-model bindings
- Barion integrations
- brand-locked footer / wordmark components

## Notes

- The components assume the consuming app provides the matching CSS classes from the Jano/Snoopyon theme.
- `ImageUploadField` is genericized: the upload endpoint must be provided by the consuming app.
