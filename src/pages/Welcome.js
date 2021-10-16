import React from "react";
import { Link } from "react-router-dom";

import LogoSplash from "../components/LogoSplash";

const Welcome = () => {
  return (
    <div className="Welcome">
      <LogoSplash introParagraph="Session 0 is a prototype social groups app that allows TTRPG players to find groups to join and run. The app is built with a FaunaDB database and a React frontend. Features include user authentication and relational data driven&nbsp;pages." />
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
  );
};

export default Welcome;
