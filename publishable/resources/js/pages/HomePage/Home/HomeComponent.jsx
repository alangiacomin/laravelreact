import { PropTypes } from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const HomeComponent = (props) => {
  const { testo } = props;
  return (
    <>
      <Row>
        <Col><h1>{testo}</h1></Col>
      </Row>
      <Row>
        <Col>{testo}</Col>
      </Row>
    </>
  );
};

HomeComponent.propTypes = {
  testo: PropTypes.string.isRequired,
};

export default HomeComponent;
