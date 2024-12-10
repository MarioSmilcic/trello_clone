import { Link } from "react-router-dom";

export const AuthLink = ({ authMode }) => {
  const isSignIn = authMode === "signIn";

  return (
    <div className="auth-link">
      {isSignIn ? "Don't have an account?" : "Already have an account?"}
      <Link to={isSignIn ? "/signup" : "/signin"}>
        {isSignIn ? "Sign up Here" : "Sign in Here"}
      </Link>
    </div>
  );
};
