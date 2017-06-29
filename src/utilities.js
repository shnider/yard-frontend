/* eslint-disable import/prefer-default-export*/

export function getImageURL(images, size = 512) {
  return `https://images.jqestate.ru/${images[0].id}-jqestate-${size}`;
}
