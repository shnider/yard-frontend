// @flow

import React from 'react';
import styled from 'styled-components';
import type { Children } from 'react';

import { media } from './../../utilities';

const Heading = styled.h2`
  padding-top: 4rem;
  padding-bottom: 1.5rem;
  margin: 0 1rem;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: ;
  color: #3e4247;

  ${media.desktop`
    margin: 0;
    text-align: center;
  `}
`;

export default (props: Children) => <Heading>Предложения в ЖК {props.children}</Heading>;
