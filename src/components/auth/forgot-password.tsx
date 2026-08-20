"use client";

import Link from "next/link";
import { Button } from "../Button";
import { Column } from "../Column";
import { FormContent } from "../FormContent";
import { Row } from "../Row";
import { AuthInputField } from "./AuthInputField";
import { AuthPageShell } from "./AuthPageShell";
import { AuthPasswordField } from "./AuthPasswordField";
import { StatusMessage } from "../StatusMessage";

export interface ForgotPasswordRequestFormState {
  email: string;
}

export interface ForgotPasswordConfirmFormState {
  confirmationCode: string;
  newPassword: string;
}

type ForgotPasswordProps = {
  hasAuthConfig: boolean;
  message: string;
  error: string;
  isSubmitting: boolean;
  pendingEmail: string;
  codeSent: boolean;
  requestForm: ForgotPasswordRequestFormState;
  confirmForm: ForgotPasswordConfirmFormState;
  updateRequestField: <K extends keyof ForgotPasswordRequestFormState>(
    field: K,
    value: ForgotPasswordRequestFormState[K],
  ) => void;
  updateConfirmField: <K extends keyof ForgotPasswordConfirmFormState>(
    field: K,
    value: ForgotPasswordConfirmFormState[K],
  ) => void;
  onSubmit: (form: ForgotPasswordRequestFormState) => void | Promise<void>;
  onConfirmSubmit: (
    form: ForgotPasswordConfirmFormState,
  ) => void | Promise<void>;
  onResendCode: () => void | Promise<void>;
  illustrationOneSrc?: string;
  illustrationTwoSrc?: string;
  /** Footer copyright line, forwarded to AuthPageShell. */
  copyrightText?: string;
};

// Same two-step shape as Signup (request -> confirm-with-code), since
// Cognito's resetPassword/confirmResetPassword flow works identically: send
// a code to the account's email, then submit that code together with the
// new password in one call. See this component's own login.tsx sibling for
// the "Forgot Password?" link that leads here.
export function ForgotPassword({
  hasAuthConfig,
  message,
  error,
  isSubmitting,
  pendingEmail,
  codeSent,
  requestForm,
  confirmForm,
  updateRequestField,
  updateConfirmField,
  onSubmit,
  onConfirmSubmit,
  onResendCode,
  illustrationOneSrc,
  illustrationTwoSrc,
  copyrightText,
}: ForgotPasswordProps) {
  function getSubmittedRequestForm(
    formElement: HTMLFormElement,
  ): ForgotPasswordRequestFormState {
    const emailInput = formElement.elements.namedItem("email");

    return {
      email: emailInput instanceof HTMLInputElement ? emailInput.value : "",
    };
  }

  function getSubmittedConfirmForm(
    formElement: HTMLFormElement,
  ): ForgotPasswordConfirmFormState {
    const codeInput = formElement.elements.namedItem("confirmationCode");
    const passwordInput = formElement.elements.namedItem("newPassword");

    return {
      confirmationCode:
        codeInput instanceof HTMLInputElement ? codeInput.value : "",
      newPassword:
        passwordInput instanceof HTMLInputElement ? passwordInput.value : "",
    };
  }

  return (
    <AuthPageShell
      title={codeSent ? "Reset password" : "Forgot password"}
      illustrationOneSrc={illustrationOneSrc}
      illustrationTwoSrc={illustrationTwoSrc}
      copyrightText={copyrightText}
      subtitle={
        <>
          Remembered your password? Login <Link href="/login">Here</Link>
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

      {!codeSent ? (
        <FormContent
          className="user-data-form mt-40 lg-mt-30"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            void onSubmit(getSubmittedRequestForm(event.currentTarget));
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
                value={requestForm.email}
                onChange={(event) => {
                  updateRequestField("email", event.currentTarget.value);
                }}
                required
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
                  void onSubmit(
                    formElement
                      ? getSubmittedRequestForm(formElement)
                      : requestForm,
                  );
                }}
              >
                {isSubmitting ? "Sending..." : "Send reset code"}
              </Button>
            </Column>
          </Row>
        </FormContent>
      ) : (
        <FormContent
          className="user-data-form mt-40 lg-mt-30"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            void onConfirmSubmit(
              getSubmittedConfirmForm(event.currentTarget),
            );
          }}
        >
          <Row>
            <Column>
              <div className="input-group-meta mb-25">
                <label>Email</label>
                <div className="mt-10 fw-500 tx-dark">{pendingEmail}</div>
              </div>
            </Column>
            <Column>
              <AuthInputField
                id="confirmationCode"
                label="Reset code"
                type="text"
                name="confirmationCode"
                placeholder="Enter code"
                value={confirmForm.confirmationCode}
                onChange={(event) => {
                  updateConfirmField(
                    "confirmationCode",
                    event.currentTarget.value,
                  );
                }}
                required
                wrapperClassName="input-group-meta mb-25"
              />
            </Column>
            <Column>
              <AuthPasswordField
                id="newPassword"
                label="New password"
                name="newPassword"
                autoComplete="new-password"
                value={confirmForm.newPassword}
                onChange={(event) => {
                  updateConfirmField("newPassword", event.currentTarget.value);
                }}
                required
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
                  void onConfirmSubmit(
                    formElement
                      ? getSubmittedConfirmForm(formElement)
                      : confirmForm,
                  );
                }}
              >
                {isSubmitting ? "Resetting..." : "Reset password"}
              </Button>
            </Column>
            <Column>
              <Button
                type="button"
                tone="form"
                className="w-100 text-uppercase mt-20"
                disabled={isSubmitting}
                onClick={() => {
                  void onResendCode();
                }}
              >
                {isSubmitting ? "Please wait..." : "Resend code"}
              </Button>
            </Column>
          </Row>
        </FormContent>
      )}
    </AuthPageShell>
  );
}
