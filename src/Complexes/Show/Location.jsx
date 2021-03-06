// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MapBox from './MapBox';
import { media } from './../../utilities';
import type { LocationType } from '../types';

const Wrapper = styled.div`
  margin: 0;

  ${media.desktop`
    margin-top: -10rem;
    padding-bottom: 4rem;
  `}
`;

const Places = styled.div`
  display: block;
  background-color: #fff;
`;

const Place = styled.dl`
  padding: 1.5rem 0.5rem 1.5625rem 0.5rem;
  margin: 0;
  border-bottom: 1px solid #eaebf0;
`;

const Name = styled.dt`
  font-weight: 500;
  line-height: 1.375rem;
  color: #3e4247;
`;

const Value = styled.dd`
  padding-top: 0.5rem;
  margin-left: 0;
  line-height: 1.375rem;
  color: #a9afb6;
`;

type Props = {
  location: LocationType,
};

export default ({ location }: Props) =>
  (<Wrapper>
    <Grid>
      <Row>
        <Col xs={12} sm={6}>
          <MapBox location={location} />
        </Col>
        <Col xs={12} sm={6}>
          <Places>
            <Place>
              <Name>Красный октябрь</Name>
              <Value>24 минуты, 6 км</Value>
            </Place>
            <Place>
              <Name>World class</Name>
              <Value>2 минуты, 300 м</Value>
            </Place>
            <Place>
              <Name>Третьяковская галерея</Name>
              <Value>14 минут, 4 км</Value>
            </Place>
          </Places>
        </Col>
      </Row>
    </Grid>
  </Wrapper>);
