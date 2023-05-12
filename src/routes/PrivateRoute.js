import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useSelector } from "react-redux";
import { LOGIN_PAGE } from "../settings/constant";

const PrivateRoute = ({ children }) => {
  const [isAuth, setAuth] = useContext(AuthContext);
  const currentUser = useSelector(
    (state) => state.auth.currentUser?.body?.token
  );

  useEffect(() => {
    if (currentUser) {
      setAuth(true);
    }
  });

  return isAuth ? children : <Navigate to={LOGIN_PAGE} />;
};

export default PrivateRoute;
