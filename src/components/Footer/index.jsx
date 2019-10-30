import React from "react";
import { Footer, NavItem, Row } from 'react-materialize';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const FooterGreyScalle = styled(Footer)`
  background-color: #222733;
  `;

const Logo = styled.img`
  margin-top: 15px;`
;

const FooterGrey = () => (
  <Row>
    <FooterGreyScalle
      copyrights="&copy 2019 Copyright Text"
      moreLinks={<a />}
      links={<ul />}
      className="example">
    </FooterGreyScalle>
  </Row>
);

export default FooterGrey;