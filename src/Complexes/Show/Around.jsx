import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Section = styled.section`
  padding-bottom: 13.625rem;
  background-color: #3e4247;
`;

const Subtitle = styled.p`
  margin-top: 11.3125rem;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.6875rem;
  color: #a9afb6;
`;

const Heading = styled.h1`
  margin-top: 3rem;
  font-family: 'Philosopher';
  font-size: 3rem;
  font-weight: bold;
  line-height: 3.75rem;
  color: #fff;
`;

const Link = styled.a`
  margin-top: 3rem;
  text-decoration: none;
  color: #00779a;
`;

const Image = styled.img`
  width: 100%;
  height: 35rem;
  margin-top: 4rem;
`;

export default () =>
  (<Section>
    <Grid>
      <Row>
        <Col lg={6}>
          <Subtitle>Якиманка</Subtitle>
          <Heading>Исторический центр Москвы в двух<br /> километрах от Кремля</Heading>
          <Link href="#">Гид по Якиманке →</Link>
        </Col>
        <Col lg={6}>
          <Image src={`${process.env.PUBLIC_URL}/images/polyanka.png`} />
        </Col>
      </Row>
    </Grid>
  </Section>);
