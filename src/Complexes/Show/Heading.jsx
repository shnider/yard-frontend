import React from 'react';
import styled from 'styled-components';
import type { Children } from 'react';

import { media } from './../../utilities';

const Heading = styled.h2`
  margin: 0;
  padding: 2rem 1rem 1rem .5rem;
  font-family: 'Philosopher';
  font-weight: bold;
  font-size: 1.5rem;
  color: #3e4247;
  line-height: 1.6875rem;

  ${media.desktop`
    padding: 2rem 0 1rem 0;
  `}
`;

export default (props: Children) => <Heading>{props.children}</Heading>;
