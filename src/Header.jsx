// @flow

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import logo from './images/compass-logo.svg';

const Header = styled.header`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompassLogo = styled.img`
  height: auto;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  object-fit: contain;
`;

const Navigation = styled.nav`
  margin: 1.5rem 0;
  line-height: 1rem;
`;

const NavLink = styled.a`
  margin-left: 2rem;
  font-size: 1rem;
  color: #3e4247;
  text-decoration: none;
`;

export default () =>
  (<Header>
    <Grid>
      <Wrapper>
        <CompassLogo src={logo} alt="Compas" />
        <Navigation>
          <NavLink href="">Купить</NavLink>
          <NavLink href="">Снять</NavLink>
          <NavLink href="">Наши Агенты</NavLink>
        </Navigation>
      </Wrapper>
    </Grid>
  </Header>);
