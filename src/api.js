/* eslint-disable import/prefer-default-export*/
// @flow

const API_URL_BASE: string = 'https://api.jqestate.ru';

export function get(relativePath: string): Promise<any> {
  return fetch(API_URL_BASE + relativePath).then(resp => resp.json());
}
