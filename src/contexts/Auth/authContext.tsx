import React, { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { getCookie } from "../../utils/cookies";
import { ProfileApi, useProfile } from "../Profile";

import { LoginApi } from "./services";

import { AuthContextType, User } from "./interfaces";
import { api } from "src/services/api";

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  const { setAddress } = useProfile();

  async function signIn(payload: { email: string, password: string }) {
    try {
      const { auth } = new LoginApi();
      const { getAddressesList } = new ProfileApi()

      const user = await auth(payload);

      const address = await getAddressesList();

      setUser(user);
      setAddress(address || []);

      router.push("/profile");
    } catch (e: any) {

      console.log(e)
      throw e;
    }
  }

  function signOut(location: string) {
    const existCookie = getCookie("auth.token");

    if (existCookie) {
      document.cookie =
        "auth.token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      document.cookie =
        "user" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      document.cookie =
        "address" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      api.defaults.headers["Authorization"] = `Bearer `;

      setUser(null);
      router.push(location);
    }
  }

  useEffect(() => {
    if ((process as any).browser) {
      const token = getCookie("auth.token");
      const user = getCookie("user");

      if (user && token) {
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        setUser(JSON.parse(user));

        return;
      }

      api.defaults.headers["Authorization"] = `Bearer `;
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth() must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
