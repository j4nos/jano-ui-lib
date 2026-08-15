"use client";

import Link from "next/link";
import { Button } from "../Button";
import { Column } from "../Column";
import { Form } from "../Form";
import { Row } from "../Row";
import { FormCheckboxField } from "../forms/FormCheckboxField";
import { AuthInputField } from "./AuthInputField";
import { AuthPageShell } from "./AuthPageShell";
import { AuthPasswordField } from "./AuthPasswordField";
import { StatusMessage } from "../StatusMessage";

export interface SignupTemplateFormState {
  name: string;
  email: string;
  password: string;
  agreedToPolicy: boolean;
}

export interface SignupTemplateConfirmationFormState {
  confirmationCode: string;
}

type SignupProps = {
  hasAuthConfig: boolean;
  message: string;
  error: string;
  isSubmitting: boolean;
  pendingEmail: string;
  needsConfirmation: boolean;
  registrationForm: SignupTemplateFormState;
  confirmationForm: SignupTemplateConfirmationFormState;
  updateRegistrationField: <K extends keyof SignupTemplateFormState>(
    field: K,
    value: SignupTemplateFormState[K],
  ) => void;
  updateConfirmationField: <
    K extends keyof SignupTemplateConfirmationFormState,
  >(
    field: K,
    value: SignupTemplateConfirmationFormState[K],
  ) => void;
  onSubmit: (form: SignupTemplateFormState) => void | Promise<void>;
  onConfirmSubmit: (
    form: SignupTemplateConfirmationFormState,
  ) => void | Promise<void>;
  onResendCode: () => void | Promise<void>;
  onGoogleSignIn: () => void | Promise<void>;
  illustrationOneSrc?: string;
  illustrationTwoSrc?: string;
  /** Footer copyright line, forwarded to AuthPageShell. */
  copyrightText?: string;
};

export function Signup({
  hasAuthConfig,
  message,
  error,
  isSubmitting,
  pendingEmail,
  needsConfirmation,
  registrationForm,
  confirmationForm,
  updateRegistrationField,
  updateConfirmationField,
  onSubmit,
  onConfirmSubmit,
  onResendCode,
  onGoogleSignIn,
  illustrationOneSrc,
  illustrationTwoSrc,
  copyrightText,
}: SignupProps) {
  function getSubmittedRegistrationForm(
    formElement: HTMLFormElement,
  ): SignupTemplateFormState {
    const nameInput = formElement.elements.namedItem("name");
    const emailInput = formElement.elements.namedItem("email");
    const passwordInput = formElement.elements.namedItem("password");
    const agreeInput = formElement.elements.namedItem("agree_to_policy");

    return {
      name: nameInput instanceof HTMLInputElement ? nameInput.value : "",
      email: emailInput instanceof HTMLInputElement ? emailInput.value : "",
      password:
        passwordInput instanceof HTMLInputElement ? passwordInput.value : "",
      agreedToPolicy:
        agreeInput instanceof HTMLInputElement ? agreeInput.checked : false,
    };
  }

  function getSubmittedConfirmationForm(
    formElement: HTMLFormElement,
  ): SignupTemplateConfirmationFormState {
    const confirmationCodeInput =
      formElement.elements.namedItem("confirmationCode");

    return {
      confirmationCode:
        confirmationCodeInput instanceof HTMLInputElement
          ? confirmationCodeInput.value
          : "",
    };
  }

  return (
    <AuthPageShell
      title={needsConfirmation ? "Confirm registration" : "Registration"}
      illustrationOneSrc={illustrationOneSrc}
      illustrationTwoSrc={illustrationTwoSrc}
      copyrightText={copyrightText}
      subtitle={
        <>
          Have an account? Login <Link href="/login">Here</Link>
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

      {!needsConfirmation ? (
        <Form
          className="user-data-form mt-40 lg-mt-30"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            void onSubmit(getSubmittedRegistrationForm(event.currentTarget));
          }}
        >
          <Row>
            <Column>
              <Button
                type="button"
                tone="form"
                className="w-100 text-uppercase mb-30"
                disabled={isSubmitting}
                onClick={() => {
                  void onGoogleSignIn();
                }}
              >
                Continue with Google
              </Button>
            </Column>
            <Column>
              <AuthInputField
                id="name"
                label="Name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                value={registrationForm.name}
                onChange={(event) => {
                  updateRegistrationField("name", event.currentTarget.value);
                }}
                required
              />
            </Column>
            <Column>
              <AuthInputField
                id="email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@example.com"
                value={registrationForm.email}
                onChange={(event) => {
                  updateRegistrationField("email", event.currentTarget.value);
                }}
                required
              />
            </Column>
            <Column>
              <AuthPasswordField
                id="password"
                label="Password"
                name="password"
                autoComplete="new-password"
                value={registrationForm.password}
                onChange={(event) => {
                  updateRegistrationField("password", event.currentTarget.value);
                }}
                required
              />
            </Column>
            <Column>
              <FormCheckboxField
                id="agree_to_policy"
                name="agree_to_policy"
                checked={registrationForm.agreedToPolicy}
                onChange={(event) => {
                  updateRegistrationField(
                    "agreedToPolicy",
                    event.currentTarget.checked,
                  );
                }}
                required
                label={
                  <>
                    By clicking &quot;SIGN UP&quot; I agree to the{" "}
                    <Link href="/policy">Terms and Conditions</Link> and{" "}
                    <Link href="/gdpr">Privacy Policy</Link>.
                  </>
                }
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
                      ? getSubmittedRegistrationForm(formElement)
                      : registrationForm,
                  );
                }}
              >
                {isSubmitting ? "Registering..." : "Sign Up"}
              </Button>
            </Column>
          </Row>
        </Form>
      ) : (
        <Form
          className="user-data-form mt-40 lg-mt-30"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            void onConfirmSubmit(
              getSubmittedConfirmationForm(event.currentTarget),
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
                label="Confirmation code"
                type="text"
                name="confirmationCode"
                placeholder="Enter code"
                value={confirmationForm.confirmationCode}
                onChange={(event) => {
                  updateConfirmationField(
                    "confirmationCode",
                    event.currentTarget.value,
                  );
                }}
                required
                wrapperClassName="input-group-meta mb-25"
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
                      ? getSubmittedConfirmationForm(formElement)
                      : confirmationForm,
                  );
                }}
              >
                {isSubmitting ? "Confirming..." : "Confirm registration"}
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
        </Form>
      )}
    </AuthPageShell>
  );
}
