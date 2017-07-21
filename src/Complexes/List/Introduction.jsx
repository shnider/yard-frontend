// @flow

import React from 'react';
import styled from 'styled-components';

import media from './../../style';

const Section = styled.section`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  ${media.mobile`
    margin: 2rem 0;
  `}
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #3e4247;

  ${media.mobile`
    font-size: 1.25rem;
  `}
`;

const Text = styled.p`
  line-height: 1.5rem;
  color: #3e4247;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

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
    <Text>
      Compass brings a modern approach to new development marketing and sales.
      From boutique rental  conversions to luxurious ground-up
      condominiums, browse our portfolio of current offerings.
    </Text>
    <ButtonWrapper>
      <Button>Contact The Team</Button>
    </ButtonWrapper>
  </Section>);
