import React from "react";

import LogoSplash from "../components/LogoSplash";
import SignUpForm from "../components/SignUpForm";

const SignUp = (props) => {
    return(
    <div className="Welcome">
        <LogoSplash />
		<SignUpForm {...props} handleSubmit={props.signup} submitLabel="create account"/>
    </div>
    )
}

export default SignUp