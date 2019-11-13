import React from "react";
import { Row, Container } from 'react-materialize';
import Spinner from 'react-spinner-material';
import styled from 'styled-components';

const Center = styled.div`
  position:fixed;
  top:50%;
  left:50%
`;

const Loading = () => (
  <Container>
    <Center>
      <Row>
        <Spinner size={100} spinnerColor={"#F95CFF"} spinnerWidth={5} visible={true} />
      </Row>
      </Center>
  </Container>
);
export default Loading;

