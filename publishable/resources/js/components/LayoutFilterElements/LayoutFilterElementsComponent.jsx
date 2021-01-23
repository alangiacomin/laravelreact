import { PropTypes } from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LayoutTopFooter from '../LayoutTopFooter';

const LayoutFilterElementsComponent = (props) => {
  const { Filtri, children } = props;
  return (
    <>
      <LayoutTopFooter>
        <Container className="my-2">
          <Row>
            <Col lg={3} className="d-none d-lg-block">
              <p>Colonna filtri</p>
              {Filtri}
            </Col>
            <Col>
              <Row className="d-lg-none">
                <Col>
                  Filtri collapsed
                </Col>
              </Row>
              <Row>
                <Col>
                  {children}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </LayoutTopFooter>
    </>
  );
};

LayoutFilterElementsComponent.propTypes = {
  children: PropTypes.node.isRequired,
  Filtri: PropTypes.node.isRequired,
};

export default LayoutFilterElementsComponent;
