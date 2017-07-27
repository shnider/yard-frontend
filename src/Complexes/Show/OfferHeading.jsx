// @flow

import React from 'react';
import styled from 'styled-components';
import type { Children } from 'react';

const Heading = styled.h2`
  padding-top: 4rem;
  padding-bottom: 1.5rem;
  margin: 0;
  text-align: center;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: ;
  background-color: #f4f5f9;
  color: #3e4247;
`;

export default (props: Children) => <Heading>Предложения в ЖК {props.children}</Heading>;
