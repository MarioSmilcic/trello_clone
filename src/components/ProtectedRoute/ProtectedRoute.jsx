import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth/auth.store";
import "./protectedRoute.style.css";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/signin");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="protected-route__loading">
        <div className="protected-route__spinner"></div>
      </div>
    );
  }

  return user ? children : null;
};

export default ProtectedRoute;
