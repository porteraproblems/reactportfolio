import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <div>
            <Navbar color="faded" expand="md" dark>
                <NavbarBrand href="" className="mr-auto">
                    React Data
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
                            <NavLink exact className="nav-link" to="/view2">
                                Contact
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact className="nav-link" to="/view3">
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