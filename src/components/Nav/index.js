import React, { useState } from 'react';
import "./Nav.css"
import {
    Navbar,
    Nav,
    NavLink,
    NavItem,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import NavSpace from "../navspace/"

function NavBar() {

    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open);
    }

    return (
        <div>
            <NavSpace />
            <div className="nav-bar">
                <Navbar light expand="md">
                    <NavLink  href="/">
                        <h1 className="ninja">Nelson Cadenas</h1>
                    </NavLink>

                    <NavbarToggler onClick={() => toggle()} />
                    <Collapse isOpen={open} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink className="nav-link" href="/home">
                                    About Me!
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" href="/portfolio" >My Portfolio</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>

                </Navbar>
            </div>

        </div>
    )
}

export default NavBar;