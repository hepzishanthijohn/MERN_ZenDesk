import React from "react";
import { useUserContext } from "./UserContext";
import Login from "../Login/Login";



function Landing() {
    const { user } = useUserContext();
    console.log("USER",user);
    console.log("UserRole",user.role)

  return (
    <div>
        {user&& user.role === 'client'?<Login></Login>:
        <Login></Login>}
    </div>
  )
}

export default Landing