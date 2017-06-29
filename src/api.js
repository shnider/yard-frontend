/* eslint-disable import/prefer-default-export*/

const API_URL_HOST = 'https://api.jqestate.ru';

export function get(relativePath) {
  return fetch(`${API_URL_HOST}${relativePath}`).then(resp => resp.json());
}
