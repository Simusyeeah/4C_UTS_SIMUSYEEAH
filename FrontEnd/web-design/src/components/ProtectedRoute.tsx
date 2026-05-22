import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    return <Navigate to="/register" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;