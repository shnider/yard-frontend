// @flow

import React from 'react';
import styled from 'styled-components';

const Record = styled.dl`
  display: flex;
  margin: 0 1rem 0.5rem 0;
`;

const Name = styled.dt`
  flex-basis: 50%;
  line-height: 1.375rem;
  color: #a9afb6;
`;

const Value = styled.dd`
  flex-basis: 50%;
  margin-left: 0;
  font-weight: 500;
  line-height: 1.375rem;
  color: #3e4247;
`;

type RecordTypes = {
  label: string,
  value: any,
}

export default (props: RecordTypes) =>
  (<Record>
    <Name>{props.label}</Name>
    <Value>{props.value}</Value>
  </Record>);
