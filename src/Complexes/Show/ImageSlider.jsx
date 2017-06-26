import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Images = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: auto;
`;

const Image = styled.img`
  height: 25rem;
`;

const ButtonWrapper = styled.div`
  z-index: 1;
  position: absolute;
  margin-top: -3rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: none;
  background-color: #00779a;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 0.625rem;
  color: #fff;
`;

export default () =>
  (<div>
    <Images>
      <Image src={`${process.env.PUBLIC_URL}/images/slider1.jpg`} alt="image1" />
      <Image src={`${process.env.PUBLIC_URL}/images/slider2.jpg`} alt="image2" />
      <Image src={`${process.env.PUBLIC_URL}/images/slider3.jpg`} alt="image3" />
      <Image src={`${process.env.PUBLIC_URL}/images/slider4.jpg`} alt="image4" />
      <Image src={`${process.env.PUBLIC_URL}/images/slider5.jpg`} alt="image5" />
    </Images>
    <Grid>
      <ButtonWrapper>
        <Button>41 фотография</Button>
      </ButtonWrapper>
    </Grid>
  </div>);
