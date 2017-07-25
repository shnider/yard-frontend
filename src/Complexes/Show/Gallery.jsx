// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import { getImageURL, media } from './../../utilities';


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
  width: 100%;
  overflow: hidden;

  ${media.desktop`
    margin-bottom: 1.5rem;
  `}
`;

const Image = styled.img`
  transition: all 0.3s;
  transform-origin: bottom;
  max-height: 80vh;
  max-width: 80vw;
`;


const ImageInfo = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0rem;
  padding: 0;
  font-weight: 300;
  color: #a9afb6;
`;

function getTransform(index: number, active: number): Object {
  const offset = -100 * active;
  const space = window.innerWidth < 992 ? -1 : 1;
  if (index === active) {
    return {
      transform: `translate(calc(50vw - 50% + ${offset}%))`,
    };
  } else if (index > active) {
    return {
      transform: `translate(calc(50vw - 50% + ${offset}% + ${space}rem)) scale(0.8)`,
      opacity: 0.5,
    };
  }
  return {
    transform: `translate(calc(50vw - 50% + ${offset}% - ${space}rem)) scale(0.8)`,
    opacity: 0.5,
  };
}

class Gallery extends Component {

  state = {
    active: 0,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlerArrowKey);
    if (this.props.index !== 0) {
      this.slideImage(this.props.index);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerArrowKey);
  }

  slideImage(index: number) {
    this.setState({ active: index });
  }

  handlerArrowKey = (e: Event) => {
    const last = this.props.children.length - 1;
    if (e.keyCode === 37 && this.state.active > 0) {
      this.slideImage(this.state.active - 1);
    } else if (e.keyCode === 39 && this.state.active < last) {
      this.slideImage(this.state.active + 1);
    }
  }

  handlerCLick = (e: Event, index: number) => {
    e.stopPropagation();
    this.slideImage(index);
  }

  render() {
    const images = this.props.children;

    return (
      <div>
        <BodyClassName className="complex-modalGallery" >
          <BackgroundGallery onClick={this.props.closePortal}>
            <Wrapper>
              {images.map((image, index) =>
                (<Image
                  src={getImageURL(image, 1024)}
                  alt={index}
                  style={getTransform(index, this.state.active)}
                  onClick={e => this.handlerCLick(e, index)}
                />))}
            </Wrapper>
            <ImageInfo>Главный фасад {this.state.active + 1}/{images.length}</ImageInfo>
          </BackgroundGallery>
        </BodyClassName>
      </div>);
  }
}

export default Gallery;
