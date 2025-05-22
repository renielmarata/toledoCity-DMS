import { createContext, useContext, useEffect, useState } from "react";
import signinService from "../../services/auth/signinService";
import { checkAuth } from "../../services";

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        const check = async () => {
            try {
                const res = await checkAuth();
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        check();
    },[])

  
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
        }

    }

    return ( 
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            errorMessage,
            setErrorMessage,

            signinRequest,
        }}>
            { children }
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;