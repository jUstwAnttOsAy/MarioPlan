import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js"; // 導入materializ(給NavBar使用)

const Navbar = (props) => {
  const { auth, profile } = props;

  // 因為Navbar每次登入狀態修改時會變動，所以需要追蹤auth重新綁定
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }, [props.auth]);

  const link = auth.uid ? (
    <SignedInLinks viewType="web" profile={profile} />
  ) : (
    <SignedOutLinks viewType="web" />
  );

  const linkMobile = auth.uid ? (
    <SignedInLinks viewType="mobile" profile={profile} />
  ) : (
    <SignedOutLinks viewType="mobile" />
  );

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          StevePlan
        </Link>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        {link}
        {linkMobile}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
