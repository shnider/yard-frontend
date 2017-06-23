import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-right: 3rem;
  font-family: 'Philosopher';
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.6875rem;
  color: #3e4247;
`;

const Subtitle = styled.small`
  display: block;
  padding-top: 0.625rem;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: #a9afb6;
`;

export default props =>
  (<Heading>
    {props.children}
    <Subtitle>{props.less}</Subtitle>
  </Heading>);
