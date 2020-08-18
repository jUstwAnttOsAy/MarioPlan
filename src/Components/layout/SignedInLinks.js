import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  // props包含 viewType=>用於辨別類型產出對應Web或Mobile的NavBar
  return (
    <ul
      id={props.viewType === "mobile" ? "nav-mobile" : "nav"}
      className={
        props.viewType === "mobile" ? "sidenav" : "right hide-on-med-and-down"
      }
    >
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating pink lighten-1 waves-effect waves-light"
        >
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
