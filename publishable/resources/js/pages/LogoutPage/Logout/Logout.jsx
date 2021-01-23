import { bindActionCreators } from '@reduxjs/toolkit';
import { PropTypes } from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import routes from '../../../config/routes';
import { userLogout } from '../../../actions/UserActions';
import SuspenseNull from '../../../components/Suspense/SuspenseNull';
import LogoutComponent from './LogoutComponent';

const Logout = (props) => {
  const { user, eseguiLogout } = props;

  useEffect(() => {
    if (user.id > 0) {
      // attendo 1 sec prima di fare il logout, così si vede il messaggio
      setTimeout(() => {
        eseguiLogout();
      }, 1000);
    }
  });

  if (user.id > 0) {
    return (
      <SuspenseNull><LogoutComponent /></SuspenseNull>
    );
  }
  return <Redirect to={routes.home.to} />;
};

Logout.propTypes = {
  user: PropTypes.shape({ id: PropTypes.number }).isRequired,
  eseguiLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  eseguiLogout: userLogout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
