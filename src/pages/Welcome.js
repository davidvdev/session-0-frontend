import React from "react";
import { Link } from "react-router-dom";

import LogoSplash from "../components/LogoSplash";

const Welcome = () => {
    return(
    <div className="Welcome">
        <LogoSplash />
		<div className="onboarding-options">
			<Link to="/login">
				<button>Login</button>
			</Link>
			<h3>or</h3>
			<Link to="/signup">
				<button>Sign Up</button>
			</Link>
		</div>
    </div>
    )
}

export default Welcome