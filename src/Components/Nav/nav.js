import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const Navi = props => {
    const [isOpen, toggle] = useState(false);

    return (
        <div width="100%">
            <Navbar id="navibar" expand="lg" light>
                <NavbarBrand href="/" className="mr-auto" id="brand">
                    Alexander Portera
                </NavbarBrand>
                <NavbarToggler onClick={() => toggle(!isOpen)} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink exact className="nav-link" to="/">
                                About
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact className="nav-link" to="/Contact">
                                Contact
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact className="nav-link" to="/Portfolio">
                                Portfolio
                </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navi;