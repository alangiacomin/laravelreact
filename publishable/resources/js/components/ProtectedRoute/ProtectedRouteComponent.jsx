import { hasPermission } from '@alangiacomin/js-utils';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { renderUnauthorized } from '../../common/renderHelpers';
import routes from '../../config/routes';
import ErrorBoundary from '../ErrorBoundary';

const ProtectedRouteComponent = (props) => {
  const {
    user, perm, to, router,
  } = props;
  const thisReferrer = router.location.pathname;
  const pastReferrer = (router.location.state || {}).referrer;
  // verifica specifico permesso per questo route
  if (perm && !perm.startsWith('special_') && !hasPermission(user, perm)) {
    if (user.id) {
      return renderUnauthorized();
    }
    return (
      <Redirect to={{
        pathname: routes.login.to,
        state: { referrer: thisReferrer },
      }}
      />
    );
  }
  // verifica permessi speciali
  if (perm === 'special_guests_only' && user.id) {
    return <Redirect to={pastReferrer || routes.home.to} />;
  }
  if (perm && perm === 'special_users_only' && !user.id) {
    if (to === routes.logout.to) {
      return <Redirect to={routes.home.to} />;
    }
    return (
      <Redirect to={{
        pathname: routes.login.to,
        state: { referrer: thisReferrer },
      }}
      />
    );
  }
  // permessi ok, accedo alla route
  return (
    <ErrorBoundary>
      <Route {...props} />
    </ErrorBoundary>
  );
};

ProtectedRouteComponent.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  perm: PropTypes.string,
  to: PropTypes.string.isRequired,
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
      state: PropTypes.shape({
        referrer: PropTypes.string,
      }),
    }),
  }).isRequired,
};

ProtectedRouteComponent.defaultProps = {
  perm: '',
};

export default ProtectedRouteComponent;
