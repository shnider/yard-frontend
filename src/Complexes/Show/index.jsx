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
import { formatPrice, formatSquare, fromatCeilHeight, formatParking } from './../../utilities';
import type { ComplexType, LocationType } from '../types';
import { kinds, securityKinds, constructionKinds, quarters } from '../dictionaries';

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


function formatLocation({ subLocalityName, street, house, postalCode }: LocationType): string {
  const mainLocation = [subLocalityName, street, house].filter(loc => !!loc).join(', ');

  if (postalCode) {
    return `${mainLocation} • ${postalCode}`;
  }
  return mainLocation;
}

class Show extends Component {

  state = {};

  state: ComplexType;

  componentDidMount() {
    this.load(this.props.match.params.id);
    window.scrollTo(0, 0);
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
    const { name, location = {}, images = [], statistics = {}, details = {} } = this.state;
    const { propertiesCount, price = {}, totalPrimaryArea = {} } = statistics;
    const { from = {}, to = {} } = price;
    const {
      architect,
      constructionKind,
      startQuarter,
      startYear,
      propertyKind,
      commissioningQuarter,
      commissioningYear,
      ceilHeight = {},
      parkings,
      undergroundGarages,
      security,
      maintenanceCosts,
    } = details;

    return (
      <BodyClassName className="complex">
        <div>
          <Header address={formatLocation(location)}>{name}</Header>
          <ImageSlider images={images} />
          <Grid>
            <Summary>
              <SummaryRecord less="предложений">950</SummaryRecord>
              <SummaryRecord less="архитектор">{architect}</SummaryRecord>
              <SummaryRecord less="застройщик">Группа «ПСН»</SummaryRecord>
            </Summary>
            <Qualities>
              <Heading>Характеристики</Heading>
              <Row>
                <Col lg={4}>
                  {propertiesCount && <QualitiesRecord label="Количество квартир" value={propertiesCount} />}
                  {propertyKind && <QualitiesRecord label="Статус" value={kinds[propertyKind]} />}
                  {price && <QualitiesRecord label="Цены" value={formatPrice(from.rub, to.rub)} />}
                  {security && <QualitiesRecord label="Безопасность" value={securityKinds[security]} />}
                </Col>
                <Col lg={4}>
                  {constructionKind && <QualitiesRecord label="Конструкция корпусов" value={constructionKinds[constructionKind]} />}
                  {totalPrimaryArea && <QualitiesRecord label="Площадь" value={formatSquare(totalPrimaryArea.from, totalPrimaryArea.to)} />}
                  {totalPrimaryArea && <QualitiesRecord label="Высота потолков" value={fromatCeilHeight(ceilHeight.from, ceilHeight.to)} />}
                  {ceilHeight && <QualitiesRecord label="Обслуживание" value={`${maintenanceCosts} руб / м² / месяц`} />}
                </Col>
                <Col lg={4}>
                  {security && <QualitiesRecord label="Начало строительства" value={`${quarters[startQuarter]} квартал ${startYear} года`} />}
                  {security && <QualitiesRecord label="Конец строительства" value={`${quarters[commissioningQuarter]} квартал ${commissioningYear} года`} />}
                  <QualitiesRecord label="Наземная парковка" value={formatParking(parkings)} />
                  <QualitiesRecord label="Подземная парковка" value={formatParking(undergroundGarages)} />
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
            <OfferHeading>{name}</OfferHeading>
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
          <Location location={location} />
        </div>
      </BodyClassName>
    );
  }
}

export default Show;
