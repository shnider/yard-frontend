// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import { getImageURL } from './../../utilities';

const BackgroundGallery = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17,17,17,0.95);
`;
const Wrapper = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 4rem;
  margin-botton: 6rem;
  overflow-y: scroll;
`;

const Image = styled.img`
  margin-left: 4rem;
  margin-right: 4rem;
`;


const Counter = styled.p`
  margin-bottom: 54px;
  padding: 0;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #a9afb6;
`;

const PortalExit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class Gallery extends Component {

  state = { activeImage: 0 };

  slideImage(index) {
    
    this.setState({ activeImage: index + 1 });
  }

  render() {
    const images = this.props.children;

    return (
      <div>
        <BodyClassName className="modal-gallery" >
          <BackgroundGallery >
            <Wrapper>
              {images.map((image, index) =>
                (<Image
                  src={getImageURL(image, 1024)}
                  alt={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.slideImage(index);
                  }}
                />))}
            </Wrapper>
            <PortalExit onClick={this.props.closePortal} />
            <Counter>Главнй фасад {this.state.activeImage}/{images.length}</Counter>
          </BackgroundGallery>
        </BodyClassName>
      </div>);
  }
}

export default Gallery;
