import React, { useEffect, useState, useContext } from "react";
import "./Nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

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
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            React-Bootstrap
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
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
            </>
        );
    } else {
        return <></>;
    }
};

export default NavHeader;
