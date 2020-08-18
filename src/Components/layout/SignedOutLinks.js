import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = (props) => {
  // props包含 viewType=>用於辨別類型產出對應Web或Mobile的NavBar
  return (
    <ul
      id={props.viewType === "mobile" ? "nav-mobile" : "nav"}
      className={
        props.viewType === "mobile" ? "sidenav" : "right hide-on-med-and-down"
      }
    >
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">LogIn</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
