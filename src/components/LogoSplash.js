import React from "react";

const LogoSplash = (props) => {
  return (
    <div>
      <h1>Session 0</h1>
      <img
        className="logo-img"
        src="android-chrome-192x192.png"
        alt="d10 logo"
      />
      <h2>Find Players - Find Games</h2>
      <h3>Adventure Awaits!</h3>
      <p className="intro-paragraph">{props.introParagraph}</p>
    </div>
  );
};

export default LogoSplash;
