import { createContext } from "react";
import UseFirebase from "./UseFirebase";

export const AuthProvider = createContext();

const AuthContext = ({children}) => {

    const allContext = UseFirebase();
  
    return (
    <AuthProvider.Provider value={allContext}>
            {children}
    </AuthProvider.Provider>
)
}

export default AuthContext;