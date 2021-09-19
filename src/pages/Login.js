import React from "react";

import LogoSplash from "../components/LogoSplash";
import LoginForm from "../components/LoginForm";

const Login = (props) => {

    return(
    <div className="Welcome">
		<LogoSplash />
		<LoginForm {...props} handleSubmit={props.login} submitLabel="Login"/>
    </div>
    )
}

export default Login