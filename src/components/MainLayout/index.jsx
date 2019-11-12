import React from 'react';
import Header from '../Header';
import { Container } from 'react-materialize';

const MainLayout = (props) => (
  <body id="mainLayout">
    <Header />
    <Container>
      { props.children }
    </Container>
  </body>
)
export default MainLayout;