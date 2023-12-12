import React from 'react';
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Nav
                justified
                pills
            >
                <NavItem>
                    <NavLink
                        to="/"
                        >
                            HOME
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/shoeshow">
                        Shoe
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/shoeedit">
                        Edit a Shoe
                    </NavLink>
                </NavItem>
            </Nav>
        </header>
    )
}
export default Header 