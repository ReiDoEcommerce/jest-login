import { AppProps } from "next/app";

import { AuthProvider } from "src/contexts/Auth";
import { ProfileProvider } from "src/contexts/Profile";

import "../styles/reset.css";
import "../styles/fonts.css";

import { GlobalStyle } from "../styles/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ProfileProvider>
      <AuthProvider>
          <GlobalStyle />

          <Component {...pageProps} />
      </AuthProvider>
    </ProfileProvider>
  );
};

export default App;
