import { AuthContainer, AuthForm, AuthLink } from "../components";
import "../styles";

const SignUp = () => {
  return (
    <AuthContainer title="Sign Up">
      <AuthForm authMode="signUp" />
      <AuthLink authMode="signUp" />
    </AuthContainer>
  );
};

export default SignUp;
