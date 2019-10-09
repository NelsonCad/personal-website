import React from "react";
import {
    Navbar,
    Nav,
    NavLink,
    NavItem,
    NavbarToggler,
    Collapse
} from "reactstrap";

function NavBar () {

    const [isToggle, setToggle] = useState(false);

    return (
        <div className="nav-bar">
            <Navbar light expand="md">
                <NavLink href="/">
                    <h1>Nelson Cadenas</h1>
                </NavLink>

                <NavbarToggler onclick={() => setToggle(!isToggle)}/>
                <Collapse toggle={isToggle} navbar>
                    <Nav className="ml-auto" navbar>
                        
                        <NavItem>
                            <NavLink className="nav-link" href="/contact">Contact Me!</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" href="/portfolio">My Portfolio</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    )
}

export default NavBar;