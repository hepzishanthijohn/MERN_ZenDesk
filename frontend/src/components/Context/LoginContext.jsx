import { createContext } from "react";
import { useState } from "react";

let LoginContext = createContext();


export const LoginProvider = ({ children }) => {
    const [isAdminVisible, setAdminVisible] = useState(false);
    return <LoginContext.Provider value={{ isAdminVisible, setAdminVisible }}>
        {children}
    </LoginContext.Provider>
}
export default LoginContext;