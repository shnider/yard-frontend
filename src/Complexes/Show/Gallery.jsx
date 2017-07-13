// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import { getImageURL } from './../../utilities';

const BackgroundGallery = styled.div`
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17,17,17,0.95);
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  height: 90vh;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s;
  transform-origin: bottom;
`;


const Counter = styled.p`
  margin-bottom: 3.25rem;
  padding: 0;
  font-size: 1rem;
  font-weight: 300;
  color: #a9afb6;
`;

class Gallery extends Component {

  state = {
    activeImage: 0,
  };

  componentDidMount() {
    if (this.props.index !== 0) {
      this.slideImage(this.props.index);
    }
  }

  getTransform(index: number): Object {
    const offset = -100 * this.state.activeImage;
    if (index === this.state.activeImage) {
      return {
        transform: `translate(calc(50vw - 50% + ${offset}%))`,
      };
    } else if (index > this.state.activeImage) {
      return {
        transform: `translate(calc(50vw - 50% + ${offset}%)) scale(0.8)`,
        opacity: 0.5,
      };
    }
    return {
      transform: `translate(calc(50vw - 50% + ${offset}%)) scale(0.8)`,
      opacity: 0.5,
    };
  }

  slideImage(index: number) {
    this.setState({ activeImage: index });
  }

  render() {
    const images = this.props.children;

    return (
      <div>
        <BodyClassName className="modal-gallery" >
          <BackgroundGallery onClick={this.props.closePortal}>
            <Wrapper>
              {images.map((image, index) =>
                (<Image
                  src={getImageURL(image, 1024)}
                  alt={index}
                  style={this.getTransform(index)}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.slideImage(index);
                  }}
                />))}
            </Wrapper>
            <Counter>Главнй фасад {this.state.activeImage + 1}/{images.length}</Counter>
          </BackgroundGallery>
        </BodyClassName>
      </div>);
  }
}

export default Gallery;
