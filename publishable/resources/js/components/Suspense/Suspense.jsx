import { PropTypes } from 'prop-types';
import React from 'react';

const Suspense = (props) => {
  const { fallback, children } = props;
  return (
    <React.Suspense fallback={fallback}>{children}</React.Suspense>
  );
};

Suspense.propTypes = {
  fallback: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

Suspense.defaultProps = {
  fallback: null,
};

export default Suspense;
