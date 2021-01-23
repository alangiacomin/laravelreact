import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { reducer as userReducer } from './actions/UserActions';

export const history = createBrowserHistory({ basename: process.env.MIX_APP_BASENAME });

function configureAppStore() {
  const store = configureStore({
    reducer: {
      router: connectRouter(history),
      user: userReducer,
    },
    // preloadedState:
    middleware: [
      routerMiddleware(history),
      ...getDefaultMiddleware({ serializableCheck: false }),
      // logger sempre per ultimo altrimenti risultano 'undefined' in console
      // createLogger()
    ],
  });

  // if (process.env.NODE_ENV !== "production" && module.hot) {
  //    module.hot.accept("./reducers/reducers", () =>
  //        store.replaceReducer(rootReducer)
  //    );
  // }

  return store;
}

export default configureAppStore;
