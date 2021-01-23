import React from 'react';
import navbarLinks from '../../config/navbarLinks';
import routes from '../../config/routes';
import TopNavbarComponent from './TopNavbarComponent';

const TopNavbar = () => (
  <TopNavbarComponent
    linksLeft={navbarLinks.topLeft}
    linksRight={navbarLinks.topRight}
    homeRoute={routes.home.to}
    appName={process.env.MIX_APP_NAME}
  />
);

// const mapStateToProps = () => ({
// });

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

export default TopNavbar;
// export default withRouter(ProtectedRoute);
// export default withRouter(connect(mapStateToProps)(ProtectedRoute));
