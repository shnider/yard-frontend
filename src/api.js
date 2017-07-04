/* eslint-disable import/prefer-default-export*/
// @flow

const API_URL_BASE: string = 'https://api.jqestate.ru';

export function get(resource: string): Promise<any> {
  return fetch(API_URL_BASE + resource).then(resp => resp.json());
}
