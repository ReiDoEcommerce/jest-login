import SignInComponent from "../../../../components/sections/login/signIn";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMockRouter } from "testUtils/createMockRouter";
import { AuthProvider } from "../../../../src/contexts/Auth";
import { ProfileProvider } from "src/contexts/Profile";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const AxiosAdapter = new MockAdapter(axios);

describe("Login tests", () => {
  describe("Inputs validation", () => {
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
      const spy = jest.spyOn(AxiosAdapter, "onPost");

      await waitFor(() => {
        userEvent.click(signInButton);
        expect(spy).toHaveBeenCalledTimes(0);
      });
    });

    it("should send a signIn request if all fields are valids", async () => {
      const signInButton = screen.getByTestId("button-submit-login");
      const spy = jest.spyOn(AxiosAdapter, "onPost");

      AxiosAdapter.onPost("https://api.masterofminiatures.com/login").reply(
        201,
        {
          data: { token: "token1234token" },
          email: "randomEmail@gmail.com",
          password: "123",
        }
      );

      const emailInput = screen.getByPlaceholderText(/Email/i);
      const passwordInput = screen.getByPlaceholderText(/Password/i);

      await userEvent.type(emailInput, "randomEmail@gmail.com");
      await userEvent.type(passwordInput, "123");

      await waitFor(() => {
        userEvent.click(signInButton);
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("Data validation", () => {
    beforeEach(async () => {
      render(
        <RouterContext.Provider
          value={createMockRouter({
            pathname: "profile",
          })}
        >
          <ProfileProvider>
            <AuthProvider>
              <SignInComponent />
            </AuthProvider>
          </ProfileProvider>
        </RouterContext.Provider>
      );

      const emailInput = screen.getByPlaceholderText(/Email/i);
      const passwordInput = screen.getByPlaceholderText(/Password/i);

      await userEvent.type(emailInput, "randomEmail@gmail.com");
      await userEvent.type(passwordInput, "123");
    });

    it("should have permanents cookies after login with valid data", async () => {});

    it("should redirect user to profile page after login with valid data", async () => {
      const signInButton = screen.getByTestId("button-submit-login");

      AxiosAdapter.onPost("https://api.masterofminiatures.com/login").reply(
        201,
        {
          data: { token: "token1234token" },
          email: "tiagodiasmaciel2000@gmail.com",
          password: "123",
        }
      );

      userEvent.click(signInButton);
      await waitFor(() => {
        expect(global.window.location.pathname).toContain("/profile");
      });
    });
  });
});
