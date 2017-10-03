// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import { media } from './../../utilities';

const Section = styled.section`
  margin: 2rem 0;
  text-align: center;

  ${media.tablet`
    margin: 4rem 0;
  `};
`;

const Heading = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 2rem;
  color: #3e4247;

  ${media.tablet`
    font-size: 1.5rem;
  `};
`;

const Text = styled.p`
  margin-top: 0.5rem;
  line-height: 1.5rem;
  color: #3e4247;
`;

const ButtonWrapper = styled.div`text-align: center;`;

const Button = styled.button`
  background-color: #000;
  border-radius: 2px;
  border: none;
  padding: 0.75rem 2rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1rem;
  color: #fff;
`;

export default () =>
  (<Section>
    <Heading>Discover Our New Developments</Heading>
    <Grid>
      <Row center="md">
        <Col xs={12} md={8} >
          <Text>
            Compass brings a modern approach to new development marketing and sales.
            From boutique rental conversions
            to luxurious ground-up condominiums, browse our portfolio of current offerings.
          </Text>
        </Col>
      </Row>
    </Grid>
    <ButtonWrapper>
      <Button>Contact The Team</Button>
    </ButtonWrapper>
  </Section>);

