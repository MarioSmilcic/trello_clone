import { AuthContainer, AuthForm, AuthLink } from "../components";
import "../styles";

const SignIn = () => {
  return (
    <AuthContainer title="Sign In">
      <AuthForm authMode="signIn" />
      <AuthLink authMode="signIn" />
    </AuthContainer>
  );
};

export default SignIn;
