/* eslint-disable import/prefer-default-export*/

const API_URL_ABSOLUTE_PATH = 'https://api.jqestate.ru';

export function get(relativePath) {
  return fetch(`${API_URL_ABSOLUTE_PATH}${relativePath}`).then(resp => resp.json());
}
