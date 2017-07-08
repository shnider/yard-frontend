// @flow

import React from 'react';

import { pluralize } from '../utilities';

type Props = {
  one: string,
  few: string,
  other: string,
  amount: number,
}

export default ({ one, few, other, amount }: Props) => (
  <span>{pluralize(one, few, other, amount)}</span>
);
