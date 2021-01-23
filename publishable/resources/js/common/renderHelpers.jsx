import React from 'react';
import { Redirect } from 'react-router-dom';
import routes from '../config/routes';
import ErrorPage from '../pages/ErrorPage';

export function renderUnauthorized() {
  return <ErrorPage errorCode={403} />;
}

export function renderNotFound() {
  return <ErrorPage errorCode={404} />;
}

export function redirectLogin(referrer) {
  return <Redirect to={{ pathname: routes.login.to, state: { referrer } }} />;
}
