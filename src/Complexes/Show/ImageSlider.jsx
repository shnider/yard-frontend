// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import Portal from 'react-portal';

import Gallery from './Gallery';
import { getImageURL } from './../../utilities';
import Pluralize from './../Pluralize';

const Images = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;

`;

const Image = styled.img`
  height: 25rem;
  transition: all 0.4s linear;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

const ButtonWrapper = styled.div`
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

class ImageSlider extends Component {
  state = {};

  openGallery(index: number) {
    this.setState({
      isOpened: true,
      indexOnClick: index,
    });
  }

  render() {
    const { images = {} } = this.props;

    return (
      <div>
        <Images>
          {images.map((image, index) =>
          (<Image
            src={getImageURL(image)}
            alt="ImageShow"
            onClick={() => {
              this.openGallery(index);
            }}
          />
          ))}
        </Images>
        <Grid>
          <ButtonWrapper>
            <Button
              onClick={() => { this.openGallery(0); }}
            >
              <span>{`${images.length} `}</span>
              <Pluralize one="фотография" few="фотографии" other="фотографий" amount={images.length} />
            </Button>
          </ButtonWrapper>
          <Portal
            closeOnEsc
            isOpened={this.state.isOpened}
          >
            <Gallery index={this.state.indexOnClick}>{images}</Gallery>
          </Portal>
        </Grid>
      </div>);
  }
}

export default ImageSlider;
