import { hasPermission, isRouteAllowed } from '@alangiacomin/js-utils';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { redirectLogin, renderUnauthorized } from '../../../common/renderHelpers';
import SuspenseNull from '../../../components/Suspense/SuspenseNull';
import routes from '../../../config/routes';
import PaginaComponent from './PaginaComponent';

const Pagina = (props) => {
  const { user } = props;
  const location = useLocation();
  const { t } = useTranslation('pagina');
  if (!isRouteAllowed(user, location, [routes.pagina_edit])) {
    return user.id ? renderUnauthorized() : redirectLogin(location.pathname);
  }
  const sottotitolo = t('subtitle');
  const titolo = t('title');
  const contenuti = t('content');
  return (
    <SuspenseNull>
      <PaginaComponent
        sottotitolo={sottotitolo}
        titolo={titolo}
        contenuti={contenuti}
        canEdit={hasPermission(user, routes.pagina_edit.perm)}
        editMode={routes.pagina_edit.path === location.pathname}
      />
    </SuspenseNull>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

Pagina.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};

Pagina.defaultProps = {
  user: {},
};

export default connect(mapStateToProps)(Pagina);
