/* eslint: disable */


import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 4rem;
  margin-botton: 6rem;
`;

const ActiveImage = styled.img`
  width: 948px;
  height: 500px;
  background-color: red;
`;

const SideImage = styled.img`
  width: 182px;
  height: 400px;
  background-color: #000;
`;

const Counter = styled.p`
  margin-bottom: 54px;
  padding: 0;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #a9afb6;
`;

class Gallery extends Component {
  state ={};

  render() {
    return (
      <div>
        <BodyClassName className="gallery" >
          <BackgroundGallery >
            {this.props.children}
            <Wrapper >
              <SideImage />
              <ActiveImage />
              <SideImage />
            </Wrapper>
            <Counter>Главнй фасад 4/5</Counter>
          </BackgroundGallery>
        </BodyClassName>
      </div>);
  }
}

export default Gallery;
