import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from 'react-bootstrap';
import LayoutTopFooter from '../LayoutTopFooter';

const LayoutOneColumnComponent = (props) => {
  const { children } = props;
  return (
    <>
      <LayoutTopFooter>
        <Container className="my-2">{children}</Container>
      </LayoutTopFooter>
    </>
  );
};

LayoutOneColumnComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutOneColumnComponent;
