// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import { media } from './../../utilities';

const Section = styled.section`border-bottom: 1px solid #eaebf0;`;

const Article = styled.article`
  position: relative;
  max-height: 20rem;
  line-height: 1.5625rem;
  color: #3e4247;
  margin: 0 1rem;
  text-overflow: clip;
  overflow: hidden;

  ${media.tablet`
    max-height: none;
  `}
`;

const Paragraph = styled.p`
  margin: 0;
  padding-top: 0rem;
  padding-bottom: 1.5rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 5.375rem 0 1rem 0;
  text-align: center;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), #fff);

  ${media.tablet`
    display: none;
  `};
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  border: none;
  background-color: #00779a;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 0.625rem;
  color: #fff;
`;

class Description extends Component {
  state = {
    isOpened: false,
  };

  showFullDescription = () => {
    this.setState({ isOpened: true });
  }

  render() {
    return (
      <Section>
        <Article style={this.state.isOpened ? { maxHeight: 'none' } : {}} >
          <Paragraph>
            ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля.
            Территория разделена на три зоны: жилой район, центральный стадион
            «Динамо» и большой спортивный парк.
          </Paragraph>
          <Paragraph>
            Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо»,
            отель «Hyatt Regency Moscow» и четыре современных бизнес-центра. На
            территории — рестораны, спа-комплекс, фитнес-центр, химчистка, аптеки,
            магазины и отделения банков. В каждом корпусе работает консьерж и
            круглосуточная охрана. Для жителей оборудованы технические помещения
            под хранение колясок и велосипедов, комнаты для домашних животных и
            уютные вестибюли с мягкими креслами для встреч с друзьями и соседями.
          </Paragraph>
          <Paragraph>
            Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей,
            торгово-развлекательный комплекс, подземная парковка для гостей и две
            крупные спортивные арены. Жизнь квартала сосредоточена в этой зоне:
            здесь можно сходить на концерт или фестиваль, поболеть за любимую
            команду и купить новую рубашку в торговом комплексе.
          </Paragraph>
          <Paragraph>
            Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и
            Отдыха. Здесь каждый найдет занятие: для детей оборудованы игровые
            зоны, для подростков — спортивные площадки на открытом воздухе, для
            взрослых — велосипедные дорожки и зоны отдыха, где можно подышать
            свежим воздухом во время рабочего перерыва.
          </Paragraph>
          {!this.state.isOpened && <ButtonWrapper>
            <Button onClick={this.showFullDescription}>Прочитать описание</Button>
          </ButtonWrapper>}
        </Article>
      </Section>);
  }
}

export default Description;
