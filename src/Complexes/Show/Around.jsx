// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { media } from './../../utilities';

const Section = styled.section`
  padding-bottom: 3rem;
  background-color: #3e4247;

  ${media.desktop`
    padding-bottom: 13.625rem;
  `}
`;

const Wrapper = styled.div`
  margin: 0 .5rem;

  ${media.tablet`
    margin: 0;
  `}
`;

const Subtitle = styled.p`
  margin-top: 4rem;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.6875rem;
  color: #a9afb6;

  ${media.desktop`
    margin-top: 11rem;
  `}
`;

const Heading = styled.h1`
  margin: 2rem 0;
  font-family: 'Philosopher';
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.75rem;
  color: #fff;

  ${media.desktopLarge`
    margin: 3rem 0;
    font-size: 3rem;
    line-height: 3.75rem;
  `}
`;

const Link = styled.a`
  text-decoration: none;
  color: #00779a;
`;

const Image = styled.img`
  margin-left: -0.5rem;
  width: 104%;
  height: auto;

  ${media.tablet`
    height: auto;
  `}

  ${media.desktop`
    margin-top: 4rem;
  `}

  ${media.desktopLarge`
    height: 35rem;
  `}
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Section>
    <Grid>
      <Row>
        <Col xs={12} sm={6}>
          <Wrapper>
            <Subtitle>Якиманка</Subtitle>
            <Heading>Исторический центр Москвы в двух<br /> километрах от Кремля</Heading>
            <Link href="#">Гид по Якиманке →</Link>
          </Wrapper>
        </Col>
        <Col xs={12} sm={6} first="xs">
          <Image src={`${PUBLIC_URL}/images/polyanka.png`} />
        </Col>
      </Row>
    </Grid>
  </Section>);
