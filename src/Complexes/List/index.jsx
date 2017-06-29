/* eslint-disable react/no-unescaped-entities*/

import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import CompassDevelopmentLogo from './CompassDevelopmentLogo';
import Introduction from './Introduction';
import Card from './Card';

const Cards = styled.section`
  margin-bottom: 6rem;
`;

function formatLocation(location) {
  return [location.subLocalityName, location.localityName].filter(loc => !!loc).join(', ');
}

class ComplexesList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    return fetch('https://api.jqestate.ru/v1/complexes?filter[state]=public')
      .then(resp => resp.json())
      .then(({ items }) => {
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

export default ComplexesList;
