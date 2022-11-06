import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <div className="topnav">
                <NavLink className="active" href="/">
                    Home
                </NavLink>
                <NavLink href="/news">News</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <NavLink href="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Nav;
