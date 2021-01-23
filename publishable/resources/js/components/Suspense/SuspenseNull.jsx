import { PropTypes } from 'prop-types';
import React from 'react';
import Suspense from './Suspense';

const SuspenseNull = (props) => {
  const { children } = props;
  return (
    <Suspense fallback={null}>{children}</Suspense>
  );
};

SuspenseNull.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default SuspenseNull;
