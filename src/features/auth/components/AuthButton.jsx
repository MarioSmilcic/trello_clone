export const AuthButton = ({ authMode, isSubmitting }) => {
  return (
    <button type="submit" className="auth-form__submit" disabled={isSubmitting}>
      {isSubmitting
        ? "Processing..."
        : authMode === "signUp"
        ? "Sign Up"
        : "Sign In"}
    </button>
  );
};

export default AuthButton;
