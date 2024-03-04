import React from "react";
import { LoginButtonProps } from "./types";

const LoginButton = (props?: LoginButtonProps): React.FC => {
  return () => {
    const {
      text = "Log In with SSO",
      href = process.env.REACT_APP_AUTH0_LOGIN_URL || "/auth0/login",
    } = props || {};
    return (
      <a
        className="btn btn--style-secondary btn--icon-style-without-border btn--size-medium"
        style={{
          width: "100%",
          display: "block",
        }}
        href={href}
      >
        {text}
      </a>
    );
  };
};
export default LoginButton;
