// @flow

import type { ImageType } from './Complexes/types';

export function getImageURL(
  image: ImageType,
  heightSize: number = 512,
): string {
  if (!image) {
    return 'http://via.placeholder.com/484x350';
  }
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${image.id}-${heightSize}`;
}

export function formatPrice(from: number, to: number): string {
  const priceFrom = Math.round(from / 1000000) / 10;
  const priceTo = Math.round(to / 100000) / 10;
  return `от ${priceFrom} до ${priceTo} млн`;
}

export function pluralize(one: string, few: string, oth: string, lot: number) {
  const number: number = lot % 10;
  if (number === 1) {
    return one;
  } else if (number >= 2 && number <= 4) {
    return few;
  }
  return oth;
}
