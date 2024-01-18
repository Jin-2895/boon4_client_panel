import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
  const location = useLocation();
  return isAllowed ? (
    children
  ) : (
    <Navigate to={redirectPath} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
