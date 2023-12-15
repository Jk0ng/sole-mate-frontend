import React from 'react';
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='Header-content'>
            <Nav
                justified
                pills
            >
                <NavItem className='Space'>
                    <NavLink
                        to="/"
                        className='Nav-title'>
                            |   Home   |
                    </NavLink>
                </NavItem>
                <NavItem className='Space'>
                    <NavLink to="/shoeindex"
                    className='Nav-title'>
                        |  Show Kicks   |
                    </NavLink>
                </NavItem>
                <NavItem className='Space'>
                    <NavLink to="/shoenew"
                    className='Nav-title'>
                        |  Add Your Solemate  |
                    </NavLink>
                </NavItem>
            </Nav>
        </header>
    )
}
export default Header 