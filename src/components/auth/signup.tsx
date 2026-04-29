"use client";

import Link from "next/link";
import { Button } from "../Button";
import { AuthInputField } from "./AuthInputField";
import { AuthPageShell } from "./AuthPageShell";
import { AuthPasswordField } from "./AuthPasswordField";
import { AuthStatusMessage } from "./AuthStatusMessage";

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
      subtitle={
        <>
          Have an account? Login <Link href="/login">Here</Link>
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

      {!needsConfirmation ? (
        <form
          className="user-data-form mt-40 lg-mt-30"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            void onSubmit(getSubmittedRegistrationForm(event.currentTarget));
          }}
        >
          <div className="row">
            <div className="col-12">
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
            </div>
            <div className="col-12">
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
            </div>
            <div className="col-12">
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
            </div>
            <div className="col-12">
              <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
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
                  />
                  <label htmlFor="agree_to_policy">
                    By clicking &quot;SIGN UP&quot; I agree to the{" "}
                    <Link href="/policy">Terms and Conditions</Link> and{" "}
                    <Link href="/gdpr">Privacy Policy</Link>.
                  </label>
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
                  void onSubmit(
                    formElement
                      ? getSubmittedRegistrationForm(formElement)
                      : registrationForm,
                  );
                }}
              >
                {isSubmitting ? "Registering..." : "Sign Up"}
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
      ) : (
        <form
          className="user-data-form mt-40 lg-mt-30"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            void onConfirmSubmit(
              getSubmittedConfirmationForm(event.currentTarget),
            );
          }}
        >
          <div className="row">
            <div className="col-12">
              <div className="input-group-meta mb-25">
                <label>Email</label>
                <div className="mt-10 fw-500 tx-dark">{pendingEmail}</div>
              </div>
            </div>
            <div className="col-12">
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
            </div>
            <div className="col-12">
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
            </div>
            <div className="col-12">
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
            </div>
          </div>
        </form>
      )}
    </AuthPageShell>
  );
}
