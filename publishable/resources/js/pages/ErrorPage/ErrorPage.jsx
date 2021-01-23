import { setDocumentTitle } from '@alangiacomin/js-utils';
import React, { lazy } from 'react';
import LayoutOneColumn from '../../components/LayoutOneColumn';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Error = lazy(() => import('../../components/Error'));

const ErrorPage = (props) => {
  setDocumentTitle();
  return (
    <LayoutOneColumn>
      <SuspensePageLoading>
        <Error {...props} />
      </SuspensePageLoading>
    </LayoutOneColumn>
  );
};

export default ErrorPage;
