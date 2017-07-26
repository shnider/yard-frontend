// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import type { Children } from 'react';

import { media } from './../../utilities';

const Header = styled.div`
  margin: 0 1rem;

  ${media.desktop`
    margin: 0;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  ${media.desktop`
    margin-top: 1.5rem;
  `}
`;

const Info = styled.div`
  margin-top: 0rem;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Philosopher';
  font-size: 1.625rem;
  color: #3e4247;
  line-height: 2.25rem;

  ${media.desktop`
    font-size: 2rem;
  `}
`;

const Location = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.375rem;
  color: #a9afb6;
`;

const ButtonWrapper = styled.div`
  display: none;

  ${media.desktop`
    display: block;
  `}
`;

const Button = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  border-color: #e0e0e1;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 0.625rem;
  color: #00779a;
`;
type HeaderProps = {
  address: string,
  children: Children,
};

export default (props: HeaderProps) =>
  (<Header>
    <Grid>
      <Wrapper>
        <Info>
          <Title>{props.children}</Title>
          <Location>{props.address}</Location>
        </Info>
        <ButtonWrapper>
          <Button>В избранное</Button>
        </ButtonWrapper>
      </Wrapper>
    </Grid>
  </Header>);
