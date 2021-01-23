import { setDocumentTitle } from '@alangiacomin/js-utils';
import React, { lazy } from 'react';
import LayoutOneColumn from '../../components/LayoutOneColumn';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Login = lazy(() => import('./Login'));

const LoginPage = (props) => {
  setDocumentTitle();
  return (
    <LayoutOneColumn>
      <SuspensePageLoading>
        <Login {...props} />
      </SuspensePageLoading>
    </LayoutOneColumn>
  );
};

export default LoginPage;
