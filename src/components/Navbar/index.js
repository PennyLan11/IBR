import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />

            <NavMenu>
                <NavLink to= '/OurTeam' activeStyle>
                    Our Team
                </NavLink>
                <NavLink to= '/TrainingProgram' activeStyle>
                    Training Program
                </NavLink>
                <NavLink to= '/FinancialArticles' activeStyle>
                    Financial Articles
                </NavLink>
                <NavLink to= '/Portfolio' activeStyle>
                    Portfolio
                </NavLink>
                <NavLink to= '/JoinUs' activeStyle>
                    Join Us
                </NavLink>
                </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;
