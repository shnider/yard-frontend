import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: 'Philosopher';
  font-weight: bold;
  font-size: 1.5rem;
  color: #3e4247;
  line-height: 1.6875rem;
`;

export default props => <Heading>{props.children}</Heading>;