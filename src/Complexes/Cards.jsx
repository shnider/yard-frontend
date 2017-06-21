import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Card from './Card';
import bitmap1 from '../images/bitmap.jpg'
import bitmap2 from '../images/bitmap2.jpg'
import bitmap3 from '../images/bitmap3.jpg'


const Cards = styled.section`
  margin-bottom: 6rem;
`;

export default () => {
  return (
    <Cards>
      <Grid>
        <Card id={1}
        imgSrc={bitmap1}
        location="SOUTH BEACH, SAN FRANCISCO"
        name="764 Metropolitan Avenue"
        text="The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments." />
        <Card id={2}
        imgSrc={bitmap2}
        location="MIDTOWN EAST, MANHATTAN"
        name="100 East 53rd Street"
        text="One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned." />
        <Card id={3}
        imgSrc={bitmap3}
        location="NOLITA, MANHATTAN"
        name="152 Elizabeth"
        text="152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood." />
      </Grid>
    </Cards>
  );
};
