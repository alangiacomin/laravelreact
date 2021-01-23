import { bindActionCreators } from '@reduxjs/toolkit';
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup'; // for everything
import { userLogin } from '../../../actions/UserActions';
import SuspenseNull from '../../../components/Suspense/SuspenseNull';
import LoginComponent from './LoginComponent';

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const location = useLocation();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    // .email("Invalid email address")
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    const { eseguiLogin } = props;
    setErrorMessage();
    eseguiLogin(values.email, values.password, {
      onSuccess: (data) => {
        setSubmitting(false);
        location.state && location.state.referrer && history.push(location.state.referrer.pathname);
      },
      onFailure: (error) => {
        setSubmitting(false);
        setErrorMessage(JSON.stringify(error.response.data, null, 2));
      },
    });
  };

  return (
    <SuspenseNull>
      <LoginComponent
        errorMessage={errorMessage}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </SuspenseNull>
  );
};

Login.propTypes = {
  eseguiLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  eseguiLogin: userLogin,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
