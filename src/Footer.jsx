// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from './utilities';
import arrow from './images/combined-shape.svg';

const Footer = styled.footer`
  background-color: #111;
`;

const Wrapper = styled.div`
  margin: 0 .5rem;
  ${media.desktop`
    margin: 0;
  `}
`;

const CredentialsHeading = styled.h4`
  margin-top: 2rem;
  margin-bottom: 0rem;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.375rem;
  color: #646971;
`;

const Credentials = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.375rem;
  color: #a9afb6;

  &:last-child {
    margin-top: 1rem;
  }
`;

const Line = styled.hr`
  margin-top: 2rem;
  border: 1px solid #3e4247;
  background-color: #3e4247;
`;

const ColumnHeading = styled.h4`
  margin-top: 1rem;
  margin-bottom: 0rem;
  font-size: 0.875rem;
  font-weight: bold;
  color: #646971;
`;

const Nav = styled.nav`
  font-size: 0.875rem;

  & :last-child {
    margin-top: 0.75rem;
  }
`;

const Link = styled.a`
  display: block;
  margin-top: 0.5rem;
  line-height: 1.375rem;
  text-decoration: none;
  font-weight: 300;
  color: #fff;
`;

const Credits = styled.p`
  margin-top: 6rem;
  margin-bottom: 1.75rem;
  font-weight: 300;
  font-size: 0.6875rem;
  line-height: 1rem;
  color: #a9afb6;
`;

export default () =>
  (<Footer>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} md={2}>
            <CredentialsHeading>ООО «Ярд»</CredentialsHeading>
            <Credentials>ОГРН 1175074002531</Credentials>
            <Credentials>ИНН 5036165365</Credentials>
            <Credentials>+7 (999) 821-14-88</Credentials>
          </Col>
          <Col xs={12} mdOffset={2} md={2}>
            <Line />
            <ColumnHeading>Жилые комплексы</ColumnHeading>
            <Nav>
              <Link href="#">ВТБ Арена Парк</Link>
              <Link href="#">Садовые кварталы</Link>
              <Link href="#">Резиденция Монэ</Link>
              <Link href="#">Все ЖК Москвы <img src={arrow} alt="Узнать больше" /></Link>
            </Nav>
          </Col>
          <Col xs={12} md={2}>
            <Line />
            <ColumnHeading>Компания</ColumnHeading>
            <Nav>
              <Link href="#">Команда</Link>
              <Link href="#">О компании</Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col xs={12} mdOffset={4} md={8}>
            <Credits>
              Любая информация, представленная на данном сайте, носит исключительно информационный
              характер и ни при каких условиях не является публичной офертой, определяемой
              положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </Credits>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Footer>);
