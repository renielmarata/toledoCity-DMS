import { createContext, useContext } from "react";
import { signinRequest } from "../../api";

const AuthContext = createContext();

export const UseAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

    return ( 
        <AuthContext.Provider values={{
            signinRequest,
        }}>
            { children }
        </AuthContext.Provider>
     );
}
 
export default AuthProvider;