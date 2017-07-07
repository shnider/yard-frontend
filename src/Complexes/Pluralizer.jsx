// @flow

import React from 'react';
import { pluralize } from '../utilities';

type Props = {
  one: string,
  few: string,
  oth: string,
  lot: number
};

export default ({ one, few, oth, lot }: Props) =>
  (<span>
    {pluralize(one, few, oth, lot)}
  </span>);
