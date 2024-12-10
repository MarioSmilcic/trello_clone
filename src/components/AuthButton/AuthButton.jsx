import { useAuthButton } from "./hooks/useAuthButton";
import { AuthIcon } from "./components/AuthIcon";
import "./authButton.style.css";

const AuthButton = ({ variant = "primary" }) => {
  const { user, handleAuthAction, buttonText } = useAuthButton();
  const buttonClass = `auth-button auth-button--${variant}`;

  return (
    <div className="auth-wrapper">
      {user && <span className="auth-email">{user.email}</span>}
      <button onClick={handleAuthAction} className={buttonClass}>
        <AuthIcon user={user} />
        <span className="auth-button__text">{buttonText}</span>
      </button>
    </div>
  );
};

export default AuthButton;
