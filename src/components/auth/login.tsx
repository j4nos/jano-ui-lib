"use client";

import Link from "next/link";
import { Button } from "../Button";
import { Column } from "../Column";
import { Form } from "../Form";
import { Row } from "../Row";
import { CheckboxField } from "../forms/CheckboxField";
import { AuthInputField } from "./AuthInputField";
import { AuthPageShell } from "./AuthPageShell";
import { AuthPasswordField } from "./AuthPasswordField";
import { StatusMessage } from "../StatusMessage";

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
  illustrationOneSrc?: string;
  illustrationTwoSrc?: string;
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
  illustrationOneSrc,
  illustrationTwoSrc,
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
      illustrationOneSrc={illustrationOneSrc}
      illustrationTwoSrc={illustrationTwoSrc}
      subtitle={
        <>
          Still don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </>
      }
    >
      {!hasAuthConfig ? (
        <StatusMessage tone="error">
          Amplify Cognito auth is not configured in this environment.
        </StatusMessage>
      ) : null}
      {message ? (
        <StatusMessage tone="info">{message}</StatusMessage>
      ) : null}
      {error ? <StatusMessage tone="error">{error}</StatusMessage> : null}

      <Form
        className="user-data-form mt-40 lg-mt-30"
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          void onSubmit(getSubmittedForm(event.currentTarget));
        }}
      >
        <Row>
          <Column>
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
          </Column>
          <Column>
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
          </Column>
          <Column>
            <CheckboxField
              id="remember"
              name="rememberMe"
              label="Keep me logged in"
              checked={form.rememberMe}
              onChange={(event) => {
                updateField("rememberMe", event.currentTarget.checked);
              }}
            />
          </Column>
          <Column>
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
          </Column>
          <Column>
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
          </Column>
        </Row>
      </Form>
    </AuthPageShell>
  );
}
