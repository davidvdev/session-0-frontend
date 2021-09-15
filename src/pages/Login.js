import React from "react";

import LogoSplash from "../components/LogoSplash";
import LoginForm from "../components/LoginForm";

const Login = (props) => {

    return(
    <>
		<LogoSplash />
		<hr />
		<LoginForm {...props} handleSubmit={props.login} submitLabel="Login"/>
    </>
    )
}

export default Login