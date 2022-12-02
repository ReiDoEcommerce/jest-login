import SignInComponent from "../../../../components/sections/login/signIn";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { AuthProvider } from "../../../../src/contexts/Auth";
import { ProfileProvider } from "src/contexts/Profile";
import "@testing-library/jest-dom";

describe("Login tests", () => {
  describe("Inputs validation", () => {
    beforeEach(() => {
      const useRouter = jest.spyOn(require("next/router"), "useRouter");
      useRouter.mockImplementation(() => ({
        pathname: "/",
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

      
    });

    it("should not send a signIn request if at least one field is empty", async () => {});

    it("should send a signIn request if all fields are valids", async () => {});
  });

  describe("Data validation", () => {
    it("should have permanents cookies after login with valid data", async () => {});

    it("should redirect user to profile page after login with valid data", async () => {});
  });
});
