// @flow
/* eslint react/style-prop-object: 0 */

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import type { LocationType } from '../types';

const MapBox = ReactMapboxGl({
  accessToken:
  'pk.eyJ1IjoianVzdHVzZWJyYWluIiwiYSI6ImNpbHV1dWlmYTAwNmp2Zm02NjZkZmIybGkifQ.feSAgXjbU00mlAjBQyv1lQ',
});

const containerStyle = {
  height: '100%',
  boxShadow: '0 0 30px 0 rgba(0,0,0,.5)',
};

export default ({ latitude = 55.75222, longitude = 37.61556 }: LocationType) => (
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
);
