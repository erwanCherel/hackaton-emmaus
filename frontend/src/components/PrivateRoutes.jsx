import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function PrivateRoutes() {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}
