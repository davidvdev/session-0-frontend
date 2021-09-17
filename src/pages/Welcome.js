import React from "react";
import { Link } from "react-router-dom";

import LogoSplash from "../components/LogoSplash";

const Welcome = () => {
    return(
    <>
        <LogoSplash />
		<hr />
		<div>
			<Link to="/login">
				<button>Login</button>
			</Link>
			<h3>or</h3>
			<Link to="/signup">
				<button>Sign Up</button>
			</Link>
		</div>
    </>
    )
}

export default Welcome