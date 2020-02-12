import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from "styled-components";
const NavBarMenu = styled(Menu)`
background:black;
width: 50%;
display: inline-block;
`

const NavbarItem = styled(Menu.Item)`
 display: inline-block;
 
    a {
    font-size: 16px;
    line-height:5;
    text-transform: uppercase;
      padding: 10px;
      color: white;
    }
    a:hover{
    border-bottom: 1px solid white;      }

`
const Navbar = () => {
    return (
        <Fragment>
            <NavBarMenu
                theme="dark"
                mode="horizontal"
            >
                <NavbarItem key="1">
                    <Link to="/inventory">
                        <a>Inventory</a>
                    </Link>
                </NavbarItem>
                <NavbarItem key="2">
                    <Link to="/finance">
                        <a>Finances</a>
                    </Link>
                </NavbarItem>
                <NavbarItem key="3">
                    <Link to="/about">
                        <a>About Us</a>
                    </Link>
                </NavbarItem>

            </NavBarMenu>

        </Fragment>
    );
};
export default Navbar;