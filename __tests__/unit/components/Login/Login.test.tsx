import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignInComponent from "../../../../components/sections/login/signIn";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "testUtils/createMockRouter";

describe("Login tests", () => {
  beforeEach(() => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <SignInComponent />
      </RouterContext.Provider>
    );
  });

  // - Validar se os erros dos campos de login aparecem na tela ao clicar no botão de submit.
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

  // - Validar se o SignIn não foi chamado ao clicar no botão de submit mas os inputs não possuirem valores.
  it("", () => {});

  // - Validar se o SignIn foi chamado ao clicar no botão de submit com os inputs com os valores certos.
  it("", () => {});

  // -Validar se o usuário foi persistido nos cookies
  it("", () => {});

  // - Validar se o usuário foi redirecionado para /profile
  it("", () => {});
});
