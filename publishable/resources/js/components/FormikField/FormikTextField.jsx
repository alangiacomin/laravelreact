import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useField } from 'formik';

const FormikTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormGroup>
        <FormLabel>{label}</FormLabel>
        <FormControl {...field} {...props} />
      </FormGroup>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

FormikTextField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormikTextField;
