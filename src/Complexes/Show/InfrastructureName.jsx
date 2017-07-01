import React from 'react';
import styled from 'styled-components';
import type { Children } from 'react';

const Name = styled.p`
  margin-top: 0rem;
  margin-bottom: 0.5rem;
  line-height: 1.375rem;
  color: #3e4247;
`;

export default (props: Children) => <Name>{props.children}</Name>;
