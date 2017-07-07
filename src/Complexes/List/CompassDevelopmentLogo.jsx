// @flow

import React from 'react';
import styled from 'styled-components';
import devlogo from '../../images/compass-development-logo.svg';

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  background-color: #161616;
  margin-bottom: 0;
`;

export default () =>
  (<Section>
    <img src={devlogo} alt="Compass Development" />
  </Section>);
