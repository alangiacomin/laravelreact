import React, { Suspense } from 'react';

const withSuspense = (WrappedComponent, fallback = null) => (props) => (
  <Suspense fallback={fallback}>
    <WrappedComponent />
  </Suspense>
);

export default withSuspense;
