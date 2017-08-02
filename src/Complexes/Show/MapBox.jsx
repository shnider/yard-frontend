// @flow
/* eslint react/style-prop-object: 0 */

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import styled from 'styled-components';

import type { LocationType } from '../types';
import { media } from './../../utilities';

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const containerStyle = {
  height: '100%',
};

const Wrapper = styled.div`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  height: 11rem;

  ${media.tablet`
    margin: 0;
    height: 19rem;
  `}
`;

export default ({ latitude = 55.75222, longitude = 37.61556 }: LocationType) => (
  <Wrapper>
    <MapBox
      zoom={[14]}
      center={[longitude, latitude]}
      style="mapbox://styles/mapbox/light-v9"
      containerStyle={containerStyle}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}
      >
        <Feature coordinates={[longitude, latitude]} />
      </Layer>
    </MapBox>
  </Wrapper>
);
