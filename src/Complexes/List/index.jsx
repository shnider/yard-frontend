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
import { getImageURL } from './../../utilities';
import type { ComplexTypes } from '../types';

const Cards = styled.section`
  margin-bottom: 6rem;complexTypes
`;

function formatLocation(location): string {
  return [location.subLocalityName, location.street, location.house]
    .filter(loc => !!loc)
    .join(', ');
}

class List extends Component {

  state: { items: Array<ComplexTypes> } = { items: [] };

  componentDidMount() {
    get('/v1/complexes?filter[state]=public').then(({ items }) => {
      this.setState({ items });
    });
  }

  render() {
    return (
      <BodyClassName className="complexes">
        <div>
          <CompassDevelopmentLogo />
          <Introduction />
          <Cards>
            <Grid>
              {this.state.items.map(complex =>
                (<Card
                  id={complex.id}
                  name={complex.name}
                  location={formatLocation(complex.location)}
                  imgSrc={getImageURL(complex.images[0])}
                  imgAlt="CardImage"
                >
                  Something about complex
                </Card>),
              )}
            </Grid>
          </Cards>
        </div>
      </BodyClassName>
    );
  }
}

export default List;
