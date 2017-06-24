import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  border-bottom: 1px solid #eaebf0;
`;

const Heading = styled.h2`
  margin: 0 auto;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: ;
  color: #3e4247;
`;

const Article = styled.article`
  margin-left: 6rem;
  line-height: 1.5625rem;
  color: #3e4247;
`;

const Paragraph = styled.p`
  margin-top: 0rem;
  margin-bottom: 1.5rem;
`;

export default () =>
  (<Section>
    <Heading>Описание</Heading>
    <Article>
      <Paragraph>
        ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля. Территория разделена на
        три зоны: жилой район, центральный стадион «Динамо» и большой спортивный парк.
      </Paragraph>
      <Paragraph>
        Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt Regency
        Moscow» и четыре современных бизнес-центра. На территории — рестораны, спа-комплекс,
        фитнес-центр, химчистка, аптеки, магазины и отделения банков. В каждом корпусе работает
        консьерж и круглосуточная охрана. Для жителей оборудованы технические помещения под хранение
        колясок и велосипедов, комнаты для домашних животных и уютные вестибюли с мягкими креслами
        для встреч с друзьями и соседями.
      </Paragraph>
      <Paragraph>
        Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей,
        торгово-развлекательный комплекс, подземная парковка для гостей и две крупные спортивные
        арены. Жизнь квартала сосредоточена в этой зоне: здесь можно сходить на концерт или
        фестиваль, поболеть за любимую команду и купить новую рубашку в торговом комплексе.
      </Paragraph>
      <Paragraph>
        Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь каждый
        найдет занятие: для детей оборудованы игровые зоны, для подростков — спортивные площадки на
        открытом воздухе, для взрослых — велосипедные дорожки и зоны отдыха, где можно подышать
        свежим воздухом во время рабочего перерыва.
      </Paragraph>
    </Article>
  </Section>);