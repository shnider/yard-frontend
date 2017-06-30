/* eslint-disable import/prefer-default-export*/

const API_URL_BASE = 'https://api.jqestate.ru';

export function get(relativePath) {
  return fetch(API_URL_BASE + relativePath).then(resp => resp.json());
}
