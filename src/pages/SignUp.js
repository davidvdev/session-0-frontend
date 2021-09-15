import React from "react";

import LogoSplash from "../components/LogoSplash";
import SignUpForm from "../components/SignUpForm";

const SignUp = (props) => {
    return(
    <>
        <LogoSplash />
		<hr />
		<h3>Let's roll up your account...</h3>
		<SignUpForm {...props} handleSubmit={props.signup} submitLabel="create account"/>
    </>
    )
}

export default SignUp