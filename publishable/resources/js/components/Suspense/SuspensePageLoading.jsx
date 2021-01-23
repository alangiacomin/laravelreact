import { PropTypes } from 'prop-types';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import Suspense from './Suspense';

const SuspensePageLoading = (props) => {
  const { children } = props;
  return (
    <Suspense
      fallback={(
        <div className="my-5 text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    >
      {children}
    </Suspense>
  );
};

SuspensePageLoading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default SuspensePageLoading;
