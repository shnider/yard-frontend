import React from 'react';
import styled from 'styled-components';

const Record = styled.dl`
  display: flex;
  margin: 0 1rem 0.5rem 0;
`;

const Name = styled.dt`
  width: 50%;
  line-height: 1.375rem;
  color: #a9afb6;
`;

const Value = styled.dd`
  width: 50%;
  font-weight: 500;
  line-height: 1.375rem;
  color: #3e4247;
`;

export default props =>
  (<Record>
    <Name>{props.name}</Name>
    <Value>{props.value}</Value>
  </Record>);
