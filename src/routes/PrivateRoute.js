import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext"


const PrivateRoute = ({children}) => {

    const authContext = useContext(AuthContext);

   return authContext.isAuth ? children : <Navigate to="/auth/login"/>
}

export default PrivateRoute;