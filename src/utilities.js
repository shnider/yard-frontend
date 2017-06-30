/* eslint-disable import/prefer-default-export*/

export function getImageURL(image, size = 512) {
  return `https://images.jqestate.ru/${image.id}-jqestate-${size}`;
}
