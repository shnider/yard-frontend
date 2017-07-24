// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Children } from 'react';

import { media } from './../../utilities';

const Card = styled(Link)`
  display: block;
  margin-bottom: 2rem;
  background: #fff;
  text-decoration: none;
  border-bottom: solid 2px #646971;

  &:hover{
    box-shadow: 0 0 1.025rem 0px rgba(0, 0, 0, .3);
  }

  ${media.desktop`
    display: flex;
    margin-bottom: 3rem;
  `}

`;

const Image = styled.img`  
  width: 100%;
  height: auto;
  object-fit: cover;

  ${media.desktop`
    width: 484px;
    height: 350px;
  `}

`;

const Contetnt = styled.div`
  display: flex;
  flex-flow: column;  
  padding: 1rem 1rem 1.5rem 1rem;

  ${media.desktop`
    padding: 1.5rem 2rem;
  `}
`;

const Location = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  line-height: 1.25rem;
  color: #646971;
`;

const Heading = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #000;

  ${media.desktop`
    font-size: 2.5rem;
    line-height: 3.5rem;
  `}

`;

const Text = styled.p`
  margin: 0;
  line-height: 1.5rem;
  color: #3e4247;
`;

type CardProps = {
  id: string,
  imgSrc: string,
  imgAlt: string,
  location: string,
  name: string,
  children: Children,
};

export default (props: CardProps) =>
  (<Card to={`/complexes/${props.id}`}>
    <Image src={props.imgSrc} alt={props.imgAlt} />
    <Contetnt>
      <Location>
        {props.location}
      </Location>
      <Heading>
        {props.name}
      </Heading>
      <Text>
        {props.children}
      </Text>
    </Contetnt>
  </Card>);
