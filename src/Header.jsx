// @flow

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './images/compass-logo.svg';
import { media } from './utilities';

const Header = styled.header`
  background-color: #fff;
  border-bottom: solid 1px #e0e0e1;
`;

const Wrapper = styled.div`
  margin: 0 .5rem;
  display: flex;
  justify-content: space-between;

  ${media.desktop`
    margin: 0;
  `}
`;


const CompassLogo = styled.img`
  margin: 1rem 0;
  height: 1rem;
  object-fit: contain;

  ${media.desktop`
    height: auto;
    margin: 1.25rem 0;
  `}
`;

const Navigation = styled.nav`
  display: none;
  margin: 1.5rem 0;
  line-height: 1rem;

  ${media.desktop`
    display: block;
  `}
`;

const NavLink = styled.a`
  margin-left: 2rem;
  font-size: 1rem;
  color: #3e4247;
  text-decoration: none;

  ${media.tablet`
  `}
`;

export default () =>
  (<Header>
    <Grid>
      <Wrapper>
        <Link to={'/'}><CompassLogo src={logo} alt="Compas" /></Link>
        <Navigation>
          <NavLink href="">Купить</NavLink>
          <NavLink href="">Снять</NavLink>
          <NavLink href="">Наши Агенты</NavLink>
        </Navigation>
      </Wrapper>
    </Grid>
  </Header>);
