import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import PaginaPage from '../pages/PaginaPage';
import routes from './routes';

const routesWithComponents = {
  home: {
    ...routes.home,
    component: HomePage,
  },

  login: {
    ...routes.login,
    component: LoginPage,
  },

  logout: {
    ...routes.logout,
    component: LogoutPage,
  },

  pagina: {
    ...routes.pagina,
    component: PaginaPage,
  },
};

export default routesWithComponents;
