import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap'

const Header = () => {
    return (
        <>
            <Nav>
                <NavItem>
                    <NavLink
                        active
                        href="http://localhost:3000/"
                    >
                        HOME (WIP)
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="http://localhost:3000/shoeshow">
                        Shoe (WIP)
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="http://localhost:3000/shoeedit">
                        More Links (WIP)
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}
export default Header 