import SignInComponent from "../../../../components/sections/login/signIn";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { render, screen, waitFor } from "@testing-library/react";
import { createMockRouter } from "testUtils/createMockRouter";
import { AuthProvider } from "../../../../src/contexts/Auth";
import { ProfileProvider } from "src/contexts/Profile";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import axios from "axios";

describe("Login tests", () => {
  beforeEach(() => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <ProfileProvider>
          <AuthProvider>
            <SignInComponent />
          </AuthProvider>
        </ProfileProvider>
      </RouterContext.Provider>
    );
  });

  it("should have a message error `Please enter a email` with empty email field after submit form", async () => {
    const signInButton = screen.getByTestId("button-submit-login");
    expect(signInButton).toBeInTheDocument();

    await waitFor(() => {
      userEvent.click(signInButton);
      const emailErrorMessage = screen.getByText(/Please enter a email/i);
      expect(emailErrorMessage).toBeInTheDocument();
    });
  });

  it("should have a message error `Please enter a password.` with empty password field after submit form", async () => {
    const signInButton = screen.getByTestId("button-submit-login");
    expect(signInButton).toBeInTheDocument();

    await waitFor(() => {
      userEvent.click(signInButton);
      const passwordErrorMessage = screen.getByText(
        /Please enter a password./i
      );
      expect(passwordErrorMessage).toBeInTheDocument();
    });
  });

  it("should not send a signIn request if at least one field is empty", async () => {
      const signInButton = screen.getByTestId("button-submit-login");
      const spy = jest.spyOn(axios, 'post')
      userEvent.click(signInButton);
      expect(spy).toHaveBeenCalledTimes(0);
  });

  // - Validar se o SignIn foi chamado ao clicar no botão de submit com os inputs com os valores certos.
  it("should send a signIn request if all fields are valids", () => {});

  // -Validar se o usuário foi persistido nos cookies
  it("should have permanents cookies after login with valid data", () => {});

  // - Validar se o usuário foi redirecionado para /profile
  it("should redirect user to profile page after login with valid data", () => {});
});
