import { api } from "src/services/api";
import { setCookie } from "../../utils/cookies";
import {  LoginResponse } from "./interfaces";

export class LoginApi {
  private static instance: LoginApi | undefined;

  public static getInstance(): LoginApi {
    if (!LoginApi.instance) {
      LoginApi.instance = new LoginApi();
    }
    return LoginApi.instance;
  }

  async auth({ email, password }: { email: string, password: string }) {
    try {
      const response = await api.post<LoginResponse>("/login", {
        email,
        password,
      });

      if (!response.data) {
        throw (response as any).response.data.error;
      }

      setCookie("auth.token", response.data.token, 30);

      setCookie(
        "user",
        JSON.stringify({ ...response.data }),
        30
      );

      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

      return response.data
    } catch (e) {
      throw e;
    }
  }
}
