import { PropTypes } from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const ErrorComponent = (props) => {
  const { title, descError } = props;
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">
            {descError}
          </h1>
        </div>
      </Card.Body>
      <Card.Footer />
    </Card>
  );
};

ErrorComponent.propTypes = {
  title: PropTypes.string.isRequired,
  descError: PropTypes.string.isRequired,
};

export default ErrorComponent;
