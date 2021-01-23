import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import * as Yup from 'yup'; // for everything
import FormikTextField from '../../../components/FormikField/FormikTextField';

const LoginComponent = (props) => {
  const {
    errorMessage, initialValues, validationSchema, onSubmit,
  } = props;
  return (
    <Row className="my-5">
      <Col lg={6} md={8} className="mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Card>
              <Card.Body>
                <Card.Title>Sign in</Card.Title>
                <Form>
                  <FormikTextField
                    name="email"
                    type="email"
                    label="Your email"
                    placeholder="Email"
                    autoComplete="Email"
                    autoFocus
                  />
                  <FormikTextField
                    name="password"
                    type="password"
                    label="Your password"
                    placeholder="******"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    block
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                  <div className="error">{errorMessage}</div>
                </Form>
              </Card.Body>
            </Card>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

LoginComponent.propTypes = {
  errorMessage: PropTypes.string,
  initialValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  validationSchema: PropTypes.instanceOf(Yup.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

LoginComponent.defaultProps = {
  errorMessage: '',
  initialValues: { },
};

export default LoginComponent;
