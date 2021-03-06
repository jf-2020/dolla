import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        dolla
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" onClick={toggle}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" onClick={toggle}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" onClick={toggle}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" onClick={toggle}>Sign Up</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;