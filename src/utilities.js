// @flow

export function getImageURL(image: string, size: number = 512): string {
  return `https://images.jqestate.ru/${image}-jqestate-${size}`;
}

export function formatPrice(from: number, to:number): string {
  const priceFrom = Math.round(from / 1000000) / 10;
  const priceTo = Math.round(to / 100000) / 10;
  return `от ${priceFrom} до ${priceTo} млн`;
}
