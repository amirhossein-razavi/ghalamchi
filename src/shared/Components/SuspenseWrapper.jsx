import React, { Suspense } from 'react';
import Loader from './Loader';

export default ({ children }) => (
  <Suspense fallback={<Loader loader />}>{children}</Suspense>
);
