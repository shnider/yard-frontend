/* eslint-disable import/prefer-default-export*/
// @flow

const API_URL_BASE: string = 'https://yard-api.now.sh';

export function get(resource: string): Promise<any> {
  return fetch(encodeURI(API_URL_BASE + resource)).then(resp => resp.json());
}
