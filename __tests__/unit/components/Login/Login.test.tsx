import SignInComponent from "../../../../components/sections/login/signIn";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as Mocks from "../../../../__mocks__/userRouterMock";
import { AuthProvider } from "../../../../src/contexts/Auth";
import UserDataMock from "../../../../__mocks__/userData";
import { ProfileProvider } from "src/contexts/Profile";
import { api } from "../../../../src/services/api";
import { getCookie } from "src/utils/cookies";
import "@testing-library/jest-dom";

const { validUser } = UserDataMock;
const { invalidUser } = UserDataMock;

const validUserEmail = validUser.email;
const validUserPassword = validUser.password;

const invalidUserEmail = invalidUser.email;
const invalidUserPassword = invalidUser.password;

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve({ data: [] })),
      post: jest.fn(() => Promise.resolve({ data: { token: "token123" } })),
      defaults: { headers: {} },
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  };
});

describe("Login tests", () => {
  const router = Mocks.createMockRouter({});

  describe("Inputs validation", () => {
    beforeEach(() => {
      render(
        <RouterContext.Provider value={router}>
          <ProfileProvider>
            <AuthProvider>
              <SignInComponent />
            </AuthProvider>
          </ProfileProvider>
        </RouterContext.Provider>
      );
    });

    it("should have a message error `Please enter a email` after submit form with invalid email", async () => {
      const emailInput: any = screen.getByPlaceholderText(/Email/i);
      const signInButton = screen.getByTestId("button-submit-login");

      expect(emailInput).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();

      expect(emailInput.value).toHaveLength(0);

      await act(() => fireEvent.click(signInButton));
      const emailMessageError: any = await screen.findByText(
        /Please enter a email/i
      );

      expect(emailMessageError).toBeInTheDocument();
    });

    it("should have a message error `Please enter a password.` after submit form with invalid password", async () => {
      const passwordInput: any = screen.getByPlaceholderText(/Password/i);
      const signInButton = screen.getByTestId("button-submit-login");

      expect(passwordInput).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();

      expect(passwordInput.value).toHaveLength(0);

      await act(() => fireEvent.click(signInButton));
      const passwordMessageError: any = await screen.findByText(
        /Please enter a password./i
      );

      expect(passwordMessageError).toBeInTheDocument();
    });

    it("should not send a signIn request if at least one field is empty", async () => {
      const passwordInput: any = screen.getByPlaceholderText(/Password/i);
      const signInButton = screen.getByTestId("button-submit-login");

      expect(passwordInput).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();

      expect(passwordInput.value).toHaveLength(0);

      const spyAxiosRequest = jest.spyOn(api, "post");

      await act(() => {
        fireEvent.click(signInButton);
        expect(spyAxiosRequest).toHaveBeenCalledTimes(0);
      });
    });

    it("should send a signIn request if all fields are valids", async () => {
      const passwordInput: any = screen.getByPlaceholderText(/Password/i);
      const signInButton = screen.getByTestId("button-submit-login");
      const emailInput: any = screen.getByPlaceholderText(/Email/i);

      expect(passwordInput).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();

      expect(passwordInput.value).toHaveLength(0);
      expect(emailInput.value).toHaveLength(0);

      await act(() => {
        fireEvent.change(emailInput, { target: { value: invalidUserEmail } });
        fireEvent.change(passwordInput, {
          target: { value: invalidUserPassword },
        });
      });

      expect(passwordInput.value).not.toHaveLength(0);
      expect(emailInput.value).not.toHaveLength(0);

      const spyAxiosRequest = jest.spyOn(api, "post");
      await act(() => fireEvent.click(signInButton));

      expect(spyAxiosRequest).toHaveBeenCalledTimes(1);
    });
  });

  describe("Data validation", () => {
    beforeEach(() => {
      render(
        <RouterContext.Provider value={router}>
          <ProfileProvider>
            <AuthProvider>
              <SignInComponent />
            </AuthProvider>
          </ProfileProvider>
        </RouterContext.Provider>
      );
    });
    it("should have permanents cookies after login with valid data", async () => {
      const passwordInput: any = screen.getByPlaceholderText(/Password/i);
      const signInButton = screen.getByTestId("button-submit-login");
      const emailInput: any = screen.getByPlaceholderText(/Email/i);

      fireEvent.change(emailInput, { target: { value: validUserEmail } });
      fireEvent.change(passwordInput, { target: { value: validUserPassword } });

      await act(() => fireEvent.click(signInButton));

      const authCookie = getCookie("auth.token");
      const userCookie = getCookie("user");

      expect(authCookie).not.toBeNull();
      expect(userCookie).not.toBeNull();
    });

    it("should redirect user to profile page after login with valid data", async () => {
      const passwordInput: any = screen.getByPlaceholderText(/Password/i);
      const signInButton = screen.getByTestId("button-submit-login");
      const emailInput: any = screen.getByPlaceholderText(/Email/i);

      fireEvent.change(emailInput, { target: { value: validUserEmail } });
      fireEvent.change(passwordInput, { target: { value: validUserPassword } });

      await act(() => fireEvent.click(signInButton));

      expect(router.push).toHaveBeenCalledWith("/profile");
    });
  });
});
