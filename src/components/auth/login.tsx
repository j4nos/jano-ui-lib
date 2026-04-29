"use client";

import Link from "next/link";
import { Button } from "../Button";
import { AuthInputField } from "./AuthInputField";
import { AuthPageShell } from "./AuthPageShell";
import { AuthPasswordField } from "./AuthPasswordField";
import { AuthStatusMessage } from "./AuthStatusMessage";

export interface LoginTemplateFormState {
  email: string;
  password: string;
  rememberMe: boolean;
}

type LoginProps = {
  hasAuthConfig: boolean;
  form: LoginTemplateFormState;
  message: string;
  error: string;
  isSubmitting: boolean;
  updateField: <K extends keyof LoginTemplateFormState>(
    field: K,
    value: LoginTemplateFormState[K],
  ) => void;
  onSubmit: (form: LoginTemplateFormState) => void | Promise<void>;
  onGoogleSignIn: () => void | Promise<void>;
};

export function Login({
  hasAuthConfig,
  form,
  message,
  error,
  isSubmitting,
  updateField,
  onSubmit,
  onGoogleSignIn,
}: LoginProps) {
  function getSubmittedForm(
    formElement: HTMLFormElement,
  ): LoginTemplateFormState {
    const emailInput = formElement.elements.namedItem("email");
    const passwordInput = formElement.elements.namedItem("password");
    const rememberInput = formElement.elements.namedItem("rememberMe");

    return {
      email: emailInput instanceof HTMLInputElement ? emailInput.value : "",
      password:
        passwordInput instanceof HTMLInputElement ? passwordInput.value : "",
      rememberMe:
        rememberInput instanceof HTMLInputElement
          ? rememberInput.checked
          : form.rememberMe,
    };
  }

  return (
    <AuthPageShell
      title="Login"
      subtitle={
        <>
          Still don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </>
      }
    >
      {!hasAuthConfig ? (
        <AuthStatusMessage tone="error">
          Amplify Cognito auth is not configured in this environment.
        </AuthStatusMessage>
      ) : null}
      {message ? (
        <AuthStatusMessage tone="info">{message}</AuthStatusMessage>
      ) : null}
      {error ? <AuthStatusMessage tone="error">{error}</AuthStatusMessage> : null}

      <form
        className="user-data-form mt-40 lg-mt-30"
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          void onSubmit(getSubmittedForm(event.currentTarget));
        }}
      >
        <div className="row">
          <div className="col-12">
            <AuthInputField
              id="email"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={(event) => {
                updateField("email", event.currentTarget.value);
              }}
              required
              wrapperClassName="input-group-meta mb-30"
            />
          </div>
          <div className="col-12">
            <AuthPasswordField
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              value={form.password}
              onChange={(event) => {
                updateField("password", event.currentTarget.value);
              }}
              required
            />
          </div>
          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  name="rememberMe"
                  checked={form.rememberMe}
                  onChange={(event) => {
                    updateField("rememberMe", event.currentTarget.checked);
                  }}
                />
                <label htmlFor="remember">Keep me logged in</label>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Button
              type="button"
              tone="form"
              className="w-100 text-uppercase mt-30"
              disabled={isSubmitting}
              onClick={(event) => {
                const formElement = event.currentTarget.form;
                void onSubmit(formElement ? getSubmittedForm(formElement) : form);
              }}
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </Button>
          </div>
          <div className="col-12">
            <Button
              type="button"
              tone="form"
              className="w-100 text-uppercase mt-20"
              disabled={isSubmitting}
              onClick={() => {
                void onGoogleSignIn();
              }}
            >
              Continue with Google
            </Button>
          </div>
        </div>
      </form>
    </AuthPageShell>
  );
}
