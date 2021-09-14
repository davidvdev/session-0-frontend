import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoSplash from "../components/LogoSplash";
import LoginForm from "../components/LoginForm";

const Login = () => {

    return(
    <>
		<LogoSplash />
		<hr />
		<LoginForm submitLabel="Login"/>
    </>
    )
}

export default Login