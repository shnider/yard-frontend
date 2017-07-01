// @flow

import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Header from './Header';
import ImageSlider from './ImageSlider';
import SummaryRecord from './SummaryRecord';
import Heading from './Heading';
import QualitiesRecord from './QualitiesRecord';
import Description from './Description';
import InfrastructureName from './InfrastructureName';
import OfferHeading from './OfferHeading';
import Offer from './Offer';
import Around from './Around';
import Location from './Location';
import { get } from './../../api';
import type { ComplexType, LocationType } from '../types';

const Summary = styled.div`
  display: flex;
  border-bottom: 1px solid #eaebf0;
`;

const Qualities = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Infrastructure = styled.section`
  margin-top: 2rem;
  padding-bottom: 3.5rem;
`;

const Offers = styled.section`
  background-color: #f4f5f9;
  padding-bottom: 4rem;
`;

function formatLocation(location: LocationType) {
  return [location.subLocalityName, location.street, location.house].filter(loc => !!loc).join(', ');
}

function formatPrice(from, to) {
  const priceFrom = Math.round(from.rub / 10000000);
  const priceTo = Math.round(to.rub / 1000000);
  return `от ${priceFrom} до ${priceTo} млн`;
}

class Show extends Component {

  state: { complex: Array<ComplexType> } = { complex: [] };

  componentDidMount() {
    this.load(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.load(nextProps.match.params.id);
    }
  }

  load(complexId: string) {
    get(`/v1/complexes/${complexId}`).then(complex => this.setState(complex));
  }

  render() {
    const { name, location = {}, images = [], statistics = {} } = this.state;
    const { price = {} } = statistics;
    const { from = {}, to = {} } = price;

    return (
      <BodyClassName className="complex">
        <div>
          <Header address={formatLocation(location)}>{name}</Header>
          <ImageSlider images={images} />
          <Grid>
            <Summary>
              <SummaryRecord less="предложений">950</SummaryRecord>
              <SummaryRecord less="архитектор">John McAslan + Partners</SummaryRecord>
              <SummaryRecord less="застройщик">Группа «ПСН»</SummaryRecord>
            </Summary>
            <Qualities>
              <Heading>Характеристики</Heading>
              <Row>
                <Col lg={4}>
                  <QualitiesRecord label="Количество квартир:" value={statistics.propertiesCount} />
                </Col>
                <Col lg={4}>
                  <QualitiesRecord label="Количество квартир:" value={statistics.propertiesCount} />
                </Col>
                <Col lg={4}>
                  <QualitiesRecord label="Количество квартир:" value={statistics.propertiesCount} />
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <QualitiesRecord label="Статус:" value="Квартиры" />
                </Col>
                <Col lg={4}>
                  <QualitiesRecord label="Количество квартир:" value={statistics.propertiesCount} />
                </Col>
                <Col lg={4}>
                  <QualitiesRecord label="Количество квартир:" value={statistics.propertiesCount} />
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <QualitiesRecord label="Цены:" value={formatPrice(from, to)} />
                </Col>
                <Col lg={4}>
                  <QualitiesRecord label="Количество квартир:" value={statistics.propertiesCount} />
                </Col>
                <Col lg={4}>
                  <QualitiesRecord label="Количество квартир:" value={statistics.propertiesCount} />
                </Col>
              </Row>
            </Qualities>
            <Description />
            <Infrastructure>
              <Heading>Инфраструктура</Heading>
              <Row>
                <Col lg={2}>
                  <InfrastructureName>Бассейн</InfrastructureName>
                </Col>
                <Col lg={2}>
                  <InfrastructureName>Детский сад</InfrastructureName>
                </Col>
                <Col lg={2}>
                  <InfrastructureName>Частная школа</InfrastructureName>
                </Col>
                <Col lg={2}>
                  <InfrastructureName>Бассейн</InfrastructureName>
                </Col>
                <Col lg={2}>
                  <InfrastructureName>Детский сад</InfrastructureName>
                </Col>
                <Col lg={2}>
                  <InfrastructureName>Частная школа</InfrastructureName>
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <InfrastructureName>Частная школа</InfrastructureName>
                </Col>
                <Col lg={2}>
                  <InfrastructureName>Частная школа</InfrastructureName>
                </Col>
                <Col lg={2}>
                  <InfrastructureName>Частная школа</InfrastructureName>
                </Col>
              </Row>
            </Infrastructure>
          </Grid>
          <Offers>
            <OfferHeading />
            <Grid>
              <Row>
                <Col lg={4}>
                  <Offer square={{ min: 59, max: 120 }} price={{ min: 20.3, max: 20.4 }} />
                </Col>
                <Col lg={4}>
                  <Offer square={{ min: 59, max: 120 }} price={{ min: 20.3, max: 82.4 }} />
                </Col>
                <Col lg={4}>
                  <Offer square={{ min: 59, max: 120 }} price={{ min: 20.3, max: 82.4 }} />
                </Col>
              </Row>
            </Grid>
          </Offers>
          <Around />
          <Location />
        </div>
      </BodyClassName>
    );
  }
}

export default Show;
