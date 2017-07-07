// @flow

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
`;

const Title = styled.h3`
  padding-top: 1.5rem;
  padding-left: 2rem;
  margin: 0;
  font-family: 'Philosopher';
  font-weight: bold;
  line-height: 1.375rem;
  color: #3e4247;
`;

const Record = styled.dl`
  margin: 0;
`;

const Name = styled.dt`
  padding-left: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.625rem;
  line-height: 1.375rem;
  color: #a9afb6;
`;

const Value = styled.dd`
  padding-left: 2rem;
  margin: 0;
  line-height: 1.375rem;
  color: #3e4247;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 0.75rem 2.625rem;
  margin-top: 2.0625rem;
  margin-bottom: 1.5rem;
  background-color: #000;
  border-radius: 2px;
  border: none;
  font-family: 'Fira Sans', sans-serif;
  color: #fff;
`;

export default (props: Object) =>
  (<Card>
    <Title>1-комнатные квартиры</Title>
    <Record>
      <Name>Площадь</Name>
      <Value>от {props.square.min} до {props.square.max} м²</Value>
      <Name>Стоимость</Name>
      <Value>от {props.price.min} до {props.price.max} млн руб</Value>
    </Record>
    <ButtonWrapper>
      <Button>Посмотреть предложения</Button>
    </ButtonWrapper>
  </Card>);
