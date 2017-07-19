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
  max-height: 100vh;
  max-width: 100vw;
  background-color: rgba(17,17,17,0.95);
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: flex-end;
  margin-bottom: 1.5rem;
  padding-top: 4rem;
  @media (max-height: 768px) {
    padding-top: 1rem;
  }
  
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 80%;
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
    active: 0,
    windowWidth: 0,
    windowHeight: 0,
  };

  componentDidMount() {
    this.getWindowSize();
    window.addEventListener('resize', this.getWindowSize);
    window.addEventListener('keydown', this.handlerArrowKey);
    if (this.props.index !== 0) {
      this.slideImage(this.props.index);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerArrowKey);
    window.removeEventListener('resize', this.getWindowSize);
  }

  getTransform(index: number): Object {
    const { active, windowWidth } = this.state;
    const offset = -100 * active;
    const size = windowWidth <= 990 ? this.getSlideSize(index) : { width: '60%', height: '100%' };
    const space = windowWidth <= 990 ? '1rem' : '4rem';
    if (index === active) {
      return {
        transform: `translate(calc(50vw - 50% + ${offset}%))`,
        width: size.width,
        height: size.height,
      };
    } else if (index > active) {
      return {
        transform: `translate(calc(50vw - 50% + ${offset}% + ${space})) scaleY(0.8)`,
        opacity: 0.5,
        width: size.width,
        height: size.height,
      };
    }
    return {
      transform: `translate(calc(50vw - 50% + ${offset}% - ${space})) scaleY(0.8)`,
      opacity: 0.5,
      width: size.width,
      height: size.height,
    };
  }

  getSlideSize(index: number): {width: number, height: number } {
    const { windowWidth } = this.state;
    const image = this.props.children[index];
    const aspectRatio = image.width / image.height;
    const width = Math.round(windowWidth * 0.7);
    const height = Math.round(width / aspectRatio);
    return { width, height };
  }

  getWindowSize = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  slideImage(index: number) {
    this.setState({ active: index });
  }

  handlerArrowKey = (e: Event) => {
    const last = this.props.children.length - 1;
    e.stopPropagation();
    if (e.keyCode === 37 && this.state.active > 0) {
      this.slideImage(this.state.active - 1);
    } else if (e.keyCode === 39 && this.state.active < last) {
      this.slideImage(this.state.active + 1);
    }
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
            <Counter>Главнй фасад {this.state.active + 1}/{images.length}</Counter>
          </BackgroundGallery>
        </BodyClassName>
      </div>);
  }
}

export default Gallery;
