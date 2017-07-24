// @flow
import { css } from 'styled-components';

import type { ImageType } from './Complexes/types';

export function getImageURL(image: ImageType, heightSize: number = 512): string {
  if (!image) {
    return 'http://via.placeholder.com/484x350';
  }
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}-${heightSize}`;
}

export function formatPrice(from: number, to: number) {
  const priceFrom = Math.round(from / 1000000) / 10;
  const priceTo = Math.round(to / 100000) / 10;
  return `от ${priceFrom} до ${priceTo} млн`;
}

export function formatSquare(from: number, to: number) {
  return `от ${Math.round(from)} до ${Math.round(to)} м²`;
}

export function fromatCeilHeight(from: number, to: number) {
  if (from === to) {
    return `${Math.round(from * 10) / 10} м`;
  }
  return `${Math.round(from * 10) / 10} - ${Math.round(to * 10) / 10} м`;
}

export function formatParking(places: number) {
  return places ? `${places} м/м` : 'Нет';
}

export function pluralize(one: string, few: string, other: string, amount: number) {
  const number: number = amount % 10;
  if (number === 1) {
    return one;
  } else if (number >= 2 && number <= 4) {
    return few;
  }
  return other;
}

export const media = {
  desktopLarge: (...args: any) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
  desktop: (...args: any) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  tablet: (...args: any) => css`
    @media (min-width: 440px) {
      ${css(...args)}
    }
  `,
};
