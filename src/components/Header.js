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
                            Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/shoeindex">
                        Show Kicks
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/shoenew">
                        Add Your Solemate
                    </NavLink>
                </NavItem>
            </Nav>
        </header>
    )
}
export default Header 