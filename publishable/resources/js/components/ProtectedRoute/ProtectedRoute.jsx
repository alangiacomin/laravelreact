import React from 'react';
import { connect } from 'react-redux';
import ProtectedRouteComponent from './ProtectedRouteComponent';

const ProtectedRoute = (props) => (<ProtectedRouteComponent {...props} />);

const mapStateToProps = (state) => ({
  user: state.user,
  router: state.router,
});

export default connect(mapStateToProps)(ProtectedRoute);
