import React from "react";
import { Navbar, NavItem, Row, Icon } from 'react-materialize';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const NavbarBlue = styled(Navbar)`
  background-color: #4D7BEB;`
;

const Logo = styled.img`
  margin-top: 15px;`
;

const IconUser = styled(Icon)`
  font-size: 40px !important;`
;

const Header = () => (
  <Row>
    <NavbarBlue brand={<Logo src={logo} alt="OneBitTwitter"
      className="responsive-img col m6 center logo" />} right className="navbar">
      <NavItem href='/logout'>
        Logout
      </NavItem>
      <NavItem href='/user/x/edit'>
        <IconUser class="icon_user">account_circle</IconUser>
      </NavItem>
    </NavbarBlue>
  </Row>
);

export default Header;