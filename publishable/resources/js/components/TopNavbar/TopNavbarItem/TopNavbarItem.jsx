import { hasPermission } from '@alangiacomin/js-utils';
import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import SuspenseNull from '../../Suspense/SuspenseNull';
import TopNavbarItemComponent from './TopNavbarItemComponent';

const TopNavbarItem = (props) => {
  const { user, route } = props;

  if (!hasPermission(user, route.perm)) {
    return null;
  }

  return (<SuspenseNull><TopNavbarItemComponent {...route} /></SuspenseNull>);
};

TopNavbarItem.propTypes = {
  user: PropTypes.shape({}),
  route: PropTypes.shape({
    to: PropTypes.string,
    exact: PropTypes.bool,
    isActive: PropTypes.func,
    title: PropTypes.string,
    perm: PropTypes.string,
  }).isRequired,
};

TopNavbarItem.defaultProps = {
  user: {},
};

const mapStateToProps = (state) => ({
  user: state.user,
});

// const mapDispatchToProps = (dispatch) => ({
//   aggiornaComuneNascita: (comune = {}) => dispatch(
//     setDatiQuadro({
//       RichiedenteDatiAnagraficiProvinciaDiNascita: comune.CodiceProvincia,
//       RichiedenteDatiAnagraficiStatoDiNascita: comune.DescrizioneStato,
//       RichiedenteDatiAnagraficiCodiceComuneDiNascita: comune.CodiceComune,
//       RichiedenteDatiAnagraficiComuneDiNascita: comune.Descrizione,
//     }),
//   ),
// });

export default connect(mapStateToProps)(TopNavbarItem);
// export default withRouter(connect(mapStateToProps)(TopNavbarItem));
