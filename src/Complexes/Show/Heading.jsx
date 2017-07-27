import React from 'react';
import styled from 'styled-components';
import type { Children } from 'react';

import { media } from './../../utilities';

const Heading = styled.h2`
  margin: 0 1rem 1rem 1rem;
  font-family: 'Philosopher';
  font-weight: bold;
  font-size: 1.5rem;
  color: #3e4247;
  line-height: 1.6875rem;

  ${media.desktop`
    margin: 0 0 1rem 0;
  `}
`;

export default (props: Children) => <Heading>{props.children}</Heading>;
