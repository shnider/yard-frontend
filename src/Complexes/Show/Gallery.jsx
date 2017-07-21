// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import media from './../../style';
import { getImageURL } from './../../utilities';


const BackgroundGallery = styled.div`
  display: flex;
  flex-flow: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0px;
  bottom: 0px;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  background-color: rgba(17,17,17,0.95);
  text-align: center;
  overflow: hidden;
  padding: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  margin-top: 4rem;
  width: 100%;
  overflow: hidden;
  
  ${media.tablet`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  `}
`;

const Image = styled.img`
  transition: all 0.3s;
  transform-origin: center bottom;


  ${media.tablet`
    max-height: 90%;
    max-width: 80%;
  `}

  
`;


const Counter = styled.p`
  margin-bottom: 2.5rem;
  padding: 0;
  font-size: 1rem;
  font-weight: 300;
  color: #a9afb6;

  ${media.mobile`
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  `}
`;

class Gallery extends Component {

  state = {
    active: 0,
    windowWidth: 0,
  };

  componentDidMount() {
    this.getWindowSize();
    window.addEventListener('keydown', this.handlerArrowKey);
    if (this.props.index !== 0) {
      this.slideImage(this.props.index);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerArrowKey);
  }

  getTransform(index: number): Object {
    const { active, windowWidth } = this.state;
    const offset = -100 * active;
    const space = windowWidth <= 1024 ? '1rem' : '4rem';
    if (index === active) {
      return {
        transform: `translate(calc(50vw - 50% + ${offset}%))`,
      };
    } else if (index > active) {
      return {
        transform: `translate(calc(50vw - 50% + ${offset}% + ${space})) scaleY(0.8)`,
        opacity: 0.5,
      };
    }
    return {
      transform: `translate(calc(50vw - 50% + ${offset}% - ${space})) scaleY(0.8)`,
      opacity: 0.5,
    };
  }

  getWindowSize = () => {
    this.setState({ windowWidth: window.innerWidth });
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
