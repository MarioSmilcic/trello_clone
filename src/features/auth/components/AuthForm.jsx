import { useAuthForm } from "../hooks/useAuthForm";
import AuthButton from "./AuthButton";
export const AuthForm = ({ authMode }) => {
  const { register, handleSubmit, errors, isSubmitting } =
    useAuthForm(authMode);

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="auth-form__group">
        <input
          type="text"
          className={`auth-form__input ${
            errors.email ? "auth-form__input--error" : ""
          }`}
          placeholder="Email"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="auth-form__error" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="auth-form__group">
        <input
          type="password"
          className={`auth-form__input ${
            errors.password ? "auth-form__input--error" : ""
          }`}
          placeholder="Password"
          autoComplete="new-password"
          {...register("password")}
        />
        {errors.password && (
          <span className="auth-form__error" role="alert">
            {errors.password.message}
          </span>
        )}
      </div>

      {authMode === "signUp" && (
        <div className="auth-form__group">
          <input
            type="password"
            className={`auth-form__input ${
              errors.confirmPassword ? "auth-form__input--error" : ""
            }`}
            placeholder="Confirm Password"
            autoComplete="new-password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="auth-form__error" role="alert">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      )}

      <AuthButton authMode={authMode} isSubmitting={isSubmitting} />
    </form>
  );
};
