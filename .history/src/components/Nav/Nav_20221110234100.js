import React, { useEffect } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (!session) {
            navigate("/login");
        }
    }, []);
    return (
        <div>
            <div className="topnav">
                <NavLink to="/" exact="true">
                    Home
                </NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Nav;
