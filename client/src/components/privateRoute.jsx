import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/auth/authProvider";

const PrivateRoute = () => {
    const { isAuthenticated } = useAuthContext();
    console.log(isAuthenticated);
    const location = useLocation();
    
    return isAuthenticated ? ( <Outlet/> ) : ( <Navigate to="/" replace={true} state={{from: location}} /> );
}
 
export default PrivateRoute;