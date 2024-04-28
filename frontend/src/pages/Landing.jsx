import React from "react";
import { useUserContext } from "../components/main-components/UserContext";
import Login from "../components/Login/Login";



function Landing() {
    const { user } = useUserContext();
    console.log("USER",user);
    console.log("UserRole",user.role)

  return (
    <div>
        {user&& user.role === 'student'?<Login></Login>:
        <Login></Login>}
    </div>
  )
}

export default Landing