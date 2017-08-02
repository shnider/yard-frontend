/* eslint-disable react/no-unescaped-entities*/
// @flow

import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import CompassDevelopmentLogo from './CompassDevelopmentLogo';
import Introduction from './Introduction';
import Card from './Card';
import { get } from './../../api';
import { getImageURL, media } from './../../utilities';
import type { ComplexType, LocationType } from '../types';

const Cards = styled.section`
  margin-bottom: 4rem;
   ${media.desktop`
    margin-bottom: 6rem;
  `}
`;

const Wrapper = styled.div`
  margin: 0 1rem;
  ${media.desktop`
    margin: 0;
  `}
`;

function formatLocation(location: LocationType) {
  return [location.subLocalityName, location.street, location.house]
    .filter(loc => !!loc)
    .join(', ');
}


class List extends Component {

  state: { items: Array<ComplexType> } = { items: [] };

  componentDidMount() {
    get('/v1/complexes?filter[state]=public').then(({ items }) => {
      this.setState({ items });
    });
  }

  render() {
    return (
      <BodyClassName className="complexes">
        <Wrapper>
          <CompassDevelopmentLogo />
          <Introduction />
          <Cards>
            <Grid>
              {this.state.items.map(complex =>
                (<Card
                  id={complex.id}
                  key={complex.slug}
                  name={complex.name}
                  location={formatLocation(complex.location)}
                  imgSrc={getImageURL(complex.images[0])}
                  imgAlt={`Фотография ${complex.name}`}
                >
                  Something about complex
                </Card>),
              )}
            </Grid>
          </Cards>
        </Wrapper>
      </BodyClassName>
    );
  }
}

export default List;
