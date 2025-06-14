import { createContext, useContext, useEffect, useState } from "react";
import signinService from "../../services/auth/signinService";
import { checkAuthService } from "../../services";

const AuthContext = createContext();

export const UseAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await checkAuthService();
                if (res.status === 200) {
                    setIsAuthenticated(true);
                    console.log("isAuthenticated is set to -> "+isAuthenticated);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (err) {
                console.log("checkAuth() -> "+err);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        }

        checkAuth();
    }, []);


  
    const signinRequest = async ({ username, password }) => {

        try {
            const res = await signinService({ username, password });
            console.log(res);

            if (res.status === 200 && res.data.success) {
                setIsAuthenticated(true);
                setErrorMessage(false);
            }

            return res;
            
        } catch(err) {
            setIsAuthenticated(false);
            setErrorMessage(err.response.data.error.message);
        } finally {
            setLoading(false);
        }

    }

    return ( 
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            errorMessage,
            setErrorMessage,
            loading,
            setLoading,

            signinRequest,
        }}>
            { children }
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;