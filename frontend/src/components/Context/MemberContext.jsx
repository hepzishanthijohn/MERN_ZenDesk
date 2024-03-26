import { createContext } from "react";
import { useState } from "react";

let MemberContext = createContext();


export const MemberProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    return <MemberContext.Provider value={{ username, setUsername }}>
        {children}
    </MemberContext.Provider>
}
export default MemberContext;