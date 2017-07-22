// @flow

import React from 'react';
import styled from 'styled-components';

import media from './../../style';
import devlogo from '../../images/compass-development-logo.svg';

const Section = styled.section`
  display: none;
  justify-content: center;
  padding: 5rem 0;
  background-color: #161616;
  margin-bottom: 0;

  ${media.desktop`
    display: flex;
  `}
`;

export default () =>
  (<Section>
    <img src={devlogo} alt="Compass Development" />
  </Section>);
