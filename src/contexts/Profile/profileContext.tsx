import React, {
  useState,
  useContext,
  createContext,
} from "react";

import { Address } from "./interfaces";

import { ProfileContextType } from "./interfaces";

const ProfileContext = createContext({} as ProfileContextType);

function ProfileProvider({ children  }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<Address[] | null>(null);

  return (
    <ProfileContext.Provider value={{ address, setAddress }}>
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error("useProfile() must be used within a ProfileProvider");
  }
  return context;
}

export { ProfileProvider, useProfile };
