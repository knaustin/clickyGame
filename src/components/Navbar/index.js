import React from "react";
import "./Navbar.scss";

function Nav(props) {
    return (
        <nav className="navbar">
        {props.children}
      </nav>
      
    );
}

export default Nav;
