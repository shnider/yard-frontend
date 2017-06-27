import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: flex;
  margin-bottom: 3rem;
  background: #fff;
  text-decoration: none;
  border-bottom: solid 2px #646971;

  &:hover{
    box-shadow: 0 0 1.025rem 0px rgba(0, 0, 0, .3);
  }
`;

const Image = styled.img`

`;

const Contetnt = styled.div`
  display:flex;
  flex-flow: column;
  padding: 1.5rem 2rem;
`;

const Location = styled.p`
  margin: 0;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  color: #646971;
`;

const Heading = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  line-height: 3.5rem;
  color: #000;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.5rem;
  color: #3e4247;
`;

export default props =>
  (<Card to={`/complex/${props.id}`}>
    <Image src={`${process.env.PUBLIC_URL}/images/compleximg${props.id}.jpg`} alt={props.imgAlt} />
    <Contetnt>
      <Location>{props.location}</Location>
      <Heading>{props.name}</Heading>
      <Text>{props.children}</Text>
    </Contetnt>
  </Card>);
