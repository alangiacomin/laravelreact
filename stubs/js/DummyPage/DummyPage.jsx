import { setDocumentTitle } from '@alangiacomin/js-utils';
import React, { lazy } from 'react';
import LayoutOneColumn from '../../components/LayoutOneColumn';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Dummy = lazy(() => import('./Dummy'));

const DummyPage = (props) => {
  setDocumentTitle('Dummy');
  return (
    <LayoutOneColumn>
      <SuspensePageLoading>
        <Dummy {...props} />
      </SuspensePageLoading>
    </LayoutOneColumn>
  );
};

export default DummyPage;
