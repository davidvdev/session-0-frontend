import React from "react";
import { Link } from "react-router-dom";
import LogoSplash from "../components/LogoSplash";
import SignUpForm from "../components/SignUpForm";

const SignUp = (props) => {
    return(
    <>
        <LogoSplash />
		<hr />
		<h3>Let's roll up your account...</h3>
		<SignUpForm {...props} submitLabel="create account"/>
    </>
    )
}

export default SignUp