import { makeRequest } from '@alangiacomin/js-utils';
import { createAction, createReducer } from '@reduxjs/toolkit';

// ACTIONS

const actionPrefix = 'USER';
export const userActions = {
  loggedIn: createAction(`${actionPrefix}/loggedIn`),
  loggedOut: createAction(`${actionPrefix}/loggedOut`),
  profile: createAction(`${actionPrefix}/profile`),
};

// REDUCERS

const defaults = {};

export const reducer = createReducer(defaults, {
  [userActions.loggedIn]: (state, action) => {},
  [userActions.loggedOut]: (state, action) => defaults,
  [userActions.profile]: (state, action) => ({ ...state, ...action.payload }),
});

// EXTRA

export function userLogin(email, password, options) {
  return (dispatch) => {
    makeRequest({
      url: '/login',
      method: 'post',
      data: {
        email: email ?? 'missing@user.com',
        password: password || 'missingpassword',
      },
      onSuccess: (data) => {
        dispatch(setUserProfile(data));
      },
      onFailure: (data) => {
        options.onFailure && options.onFailure(data);
      },
    });
  };
}

export function userLogout() {
  return (dispatch) => {
    makeRequest({
      url: '/logout',
      method: 'post',
      onSuccess: (data) => {
        dispatch(userActions.loggedOut(data));
      },
    });
  };
}

export function getUserProfile() {
  return (dispatch) => {
    makeRequest({
      url: '/user',
      onSuccess: (data) => {
        dispatch(setUserProfile(data));
      },
    });
  };
}

export function setUserProfile(data) {
  return (dispatch) => {
    dispatch(userActions.profile(data));
  };
}
