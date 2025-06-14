import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UseAuthContext } from "../context/auth/authProvider";

const PrivateRoute = () => {
    const { isAuthenticated, loading } = UseAuthContext();
    const location = useLocation();

    if (loading) {
        return <div>Loading ...</div>
    }
    
    return isAuthenticated ? ( <Outlet/> ) : ( <Navigate to="/" replace={true} state={{from: location}} /> );
}
 
export default PrivateRoute;