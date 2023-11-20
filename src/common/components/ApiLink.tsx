import type { PropsWithChildren, ReactElement } from 'react';

import { API_URL } from 'src/common/common-constants';
import { WithClass } from 'src/common/types/common-types';

const ApiLink = ({ children, className = '' }: PropsWithChildren<WithClass>): ReactElement => (
  <a className={className} href={API_URL} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
);

export default ApiLink;
