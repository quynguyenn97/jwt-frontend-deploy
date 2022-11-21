import React, { useEffect, useState, useContext } from "react";
import "./Nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

const NavHeader = (props) => {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const [isShow, setIsShow] = useState(true);
    if ((user && user.isAuthenticated === true) || location.pathname === "/") {
        return (
            <>
                {/* <div className="topnav">
                    <NavLink to="/" exact="true">
                        Home
                    </NavLink>
                    <NavLink to="/users">users</NavLink>
                    <NavLink to="/projects">projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div> */}
                <div className="nav-header">
                    <Navbar bg="header" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    src=""
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                                <span className="brand-name">React</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="/" exact className="nav-link">
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/users"
                                        exact
                                        className="nav-link">
                                        Users
                                    </NavLink>
                                    <NavLink
                                        to="/projects"
                                        exact
                                        className="nav-link">
                                        Projects
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        exact
                                        className="nav-link">
                                        About
                                    </NavLink>
                                    </Nav >
                                    <NavDropdown
                                        title="Dropdown"
                                        id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">
                                            Action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">
                                            Something
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    } else {
        return <></>;
    }
};

export default NavHeader;
