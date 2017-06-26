import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Header = styled.div`
  border-top: 1px solid #eaebf0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const Info = styled.div`
  margin-top: 0rem;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Philosopher';
  font-size: 2rem;
  color: #3e4247;
  line-height: 2.25rem;
`;

const Location = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.375rem;
  color: #a9afb6;
`;

const ButtonWrapper = styled.div`

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

export default () =>
  (<Header>
    <Grid>
      <Wrapper>
        <Info>
          <Title>Жилой комплекс «Полянка/44»</Title>
          <Location>Район Якиманка, улица Большая Полянка, дом 44 • 119180</Location>
        </Info>
        <ButtonWrapper>
          <Button>В избранное</Button>
        </ButtonWrapper>
      </Wrapper>
    </Grid>
  </Header>);
