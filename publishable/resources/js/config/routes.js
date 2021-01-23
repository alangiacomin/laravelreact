import { absoluteUrl, explodeRoutes } from '@alangiacomin/js-utils';

const routesConfig = {
  home: {
    title: 'Home',
    to: '/',
  },

  admin: {
    title: 'Admin',
    perm: 'browse_admin',
    to: absoluteUrl('/admin'),
  },

  login: {
    title: 'Login',
    to: '/login',
    perm: 'special_guests_only',
  },

  logout: {
    title: 'Logout',
    to: '/logout',
    perm: 'special_users_only',
  },

  pagina: {
    title: 'page',
    to: '/pagina',
    exact: false,
    subRoutes: {
      edit: {
        to: '/edit',
        perm: 'edit_page_data',
      },
    },
  },

  nonesiste: {
    title: 'not_exist',
    to: '/nonesiste',
  },

  editor: {
    title: 'Editor',
    to: '/editor',
    perm: 'edit_page_data',
  },
};

const routes = explodeRoutes(routesConfig);

export default routes;
