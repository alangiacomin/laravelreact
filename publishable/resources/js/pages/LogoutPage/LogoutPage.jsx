import { setDocumentTitle } from '@alangiacomin/js-utils';
import React, { lazy } from 'react';
import LayoutOneColumn from '../../components/LayoutOneColumn';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Logout = lazy(() => import('./Logout'));

const LogoutPage = (props) => {
  setDocumentTitle();
  return (
    <LayoutOneColumn>
      <SuspensePageLoading>
        <Logout {...props} />
      </SuspensePageLoading>
    </LayoutOneColumn>
  );
};

export default LogoutPage;
