// @flow
import { css } from 'styled-components';

const media = {
  desktop: (...args) => css`
    @media (max-width: 1120px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 990px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 440px) {
      ${css(...args)}
    }
  `,
};

export default media;
