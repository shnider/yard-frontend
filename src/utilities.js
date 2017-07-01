/* eslint-disable import/prefer-default-export*/
// @flow

export function getImageURL(image: Object, size: number = 512): string {
  return `https://images.jqestate.ru/${image.id}-jqestate-${size}`;
}
