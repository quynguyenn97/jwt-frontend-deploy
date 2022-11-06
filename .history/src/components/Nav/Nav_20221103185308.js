import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom

const Nav = (props) => {
    return (
        <div>
            <div className="topnav">
                <a className="active" href="/">
                    Home
                </a>
                <a href="/news">News</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Nav;
