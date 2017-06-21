import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Heading = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: #3e4247;
`;

const Text = styled.text`
  margin-bottom: 1rem;
  line-height: 1.5rem;
  color: #3e4247;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  background-color: #000;
  border-radius: 2px;
  border: none;
  padding-left: 1.9375rem;
  padding-right: 1.9375rem;
  padding-top: 0.8125rem;
  padding-bottom: 0.8125rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1rem;
  color: #fff;
`;

export default () => {
  return (
    <Section>
      <Heading  class="introduction-heading">Discover Our New Developments</Heading >
      <Text>Compass brings a modern approach to new development marketing and sales. From boutique rental <br/> conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</Text>
      <ButtonWrapper>
        <Button>Contact The Team</Button>
      </ButtonWrapper>
    </Section>

  );
};
