import SignInComponent from "components/sections/login/signIn";

import * as S from "styles/pages/login";

export default function LoginPage() {
  return (
    <S.Login isMaxWidth>
      <SignInComponent />
    </S.Login>
  );
}
