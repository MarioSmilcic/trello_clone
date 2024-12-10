export const AuthContainer = ({ title, children }) => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};
