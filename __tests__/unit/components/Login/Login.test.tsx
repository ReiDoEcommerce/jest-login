import SignInComponent from "../../../../components/sections/login/signIn";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { AuthProvider } from "../../../../src/contexts/Auth";
import { ProfileProvider } from "src/contexts/Profile";
import { api } from "../../../../src/services/api";
import * as cookies from "src/utils/cookies";
import ProfilePage from "pages/profile";
import "@testing-library/jest-dom";

describe("Login tests", () => {
  describe("Inputs validation", () => {
    beforeEach(() => {
      const useRouter = jest.spyOn(require("next/router"), "useRouter");
      useRouter.mockImplementation(() => ({
        pathname: "/",
      }));

      jest.mock("../../../../src/services/api", () => ({
        post: jest.fn(() => ({ data: { token: "23123" } })),
      }));

      render(
        <ProfileProvider>
          <AuthProvider>
            <SignInComponent />
          </AuthProvider>
        </ProfileProvider>
      );
    });

    it("should have a message error `Please enter a email` with empty email field after submit form", async () => {
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

    it("should have a message error `Please enter a password.` with empty password field after submit form", async () => {
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
      const emailInput: any = screen.getByPlaceholderText(/Email/i);
      const passwordInput: any = screen.getByPlaceholderText(/Password/i);
      const signInButton = screen.getByTestId("button-submit-login");

      expect(passwordInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();

      expect(passwordInput.value).toHaveLength(0);
      expect(emailInput.value).toHaveLength(0);

      await act(() => {
        fireEvent.change(emailInput, {
          target: { value: "Lucmaieski@gmail.com" },
        });
        fireEvent.change(passwordInput, { target: { value: "123" } });
      });

      expect(emailInput.value).not.toHaveLength(0);
      expect(passwordInput.value).not.toHaveLength(0);

      const spyAxiosRequest = jest.spyOn(api, "post");
      await act(() => fireEvent.click(signInButton));

      expect(spyAxiosRequest).toHaveBeenCalledTimes(1);
    });
  });

  describe("Data validation", () => {
    beforeEach(() => {
      const useRouter = jest.spyOn(require("next/router"), "useRouter");
      useRouter.mockImplementation(() => ({
        pathname: "/",
      }));

      jest.mock("../../../../src/services/api", () => ({
        post: jest.fn(() => ({ data: { token: "23123" } })),
      }));

      jest.mock("src/utils/cookies", () => ({
        setCookie: jest.fn(),
      }));

      render(
        <ProfileProvider>
          <AuthProvider>
            <SignInComponent />
          </AuthProvider>
        </ProfileProvider>
      );
    });
    it("should have permanents cookies after login with valid data", async () => {});

    it("should redirect user to profile page after login with valid data", async () => {
      const emailInput: any = screen.getByPlaceholderText(/Email/i);
      const passwordInput: any = screen.getByPlaceholderText(/Password/i);
      const signInButton = screen.getByTestId("button-submit-login");
      expect(passwordInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();
      expect(passwordInput.value).toHaveLength(0);
      expect(emailInput.value).toHaveLength(0);
      await act(() => {
        fireEvent.change(emailInput, {
          target: { value: "tiagodiasmaciel2000@gmail.com" },
        });
        fireEvent.change(passwordInput, { target: { value: "123" } });
      });
      expect(emailInput.value).not.toHaveLength(0);
      expect(passwordInput.value).not.toHaveLength(0);

      await act(() => {
        fireEvent.click(signInButton);
      });
      expect(window.location.pathname).toBe("/profile");
    });
  });
});
