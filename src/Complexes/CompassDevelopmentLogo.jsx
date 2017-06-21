import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import devlogo from '../images/compass-development-logo.svg'

const Section = styled.section`
  height: 18.1875rem;
  display: flex;
  justify-content: center;
  background-color: #161616;
  margin-bottom: 0;
`;

export default () => {
  return (
    <Section>
      <img src={devlogo}/>
    </Section>
  );
};
