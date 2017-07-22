// @flow
import { css } from 'styled-components';

const media = {
  large: (...args: any) => css`
    @media (min-width: 1120px) {
      ${css(...args)}
    }
  `,
  desktop: (...args: any) => css`
    @media (min-width: 990px) {
      ${css(...args)}
    }
  `,
  tablet: (...args: any) => css`
    @media (min-width: 440px) {
      ${css(...args)}
    }
  `,
};

export default media;
