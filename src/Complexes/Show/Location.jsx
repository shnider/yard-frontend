import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div`
  margin-top: -10rem;
  padding-bottom: 4rem;
`;

const Image = styled.img`
  width: 100%;
  height: 19.125rem;
  box-shadow: 0 0 30px 0 rgba(0,0,0,.5);
`;

const Places = styled.div`
  background-color: #fff;
  box-shadow: 0 0 30px 0 rgba(0,0,0,.5);
`;

const Place = styled.dl`
  padding: 1.5rem 1.5rem 1.5625rem 1.5rem;
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

export default () =>
  (<Grid>
    <Wrapper>
      <Row>
        <Col lg={6}>
          <Image src={`${process.env.PUBLIC_URL}/images/map.png`} />
        </Col>
        <Col lg={6}>
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
    </Wrapper>
  </Grid>);
