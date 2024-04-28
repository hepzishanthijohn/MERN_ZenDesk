import { createContext } from "react";
import { useState } from "react";

let MemberContext = createContext();


export const MemberProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] =useState("");
    return <MemberContext.Provider value={{ username, setUsername,password,setPassword }}>
        {children}
    </MemberContext.Provider>
}
export default MemberContext;