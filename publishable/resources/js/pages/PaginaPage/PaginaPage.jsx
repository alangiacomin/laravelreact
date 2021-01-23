import { setDocumentTitle } from '@alangiacomin/js-utils';
import React, { lazy } from 'react';
import LayoutOneColumn from '../../components/LayoutOneColumn';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Pagina = lazy(() => import('./Pagina'));

const PaginaPage = (props) => {
  setDocumentTitle('Pagina');
  return (
    <LayoutOneColumn>
      <SuspensePageLoading>
        <Pagina {...props} />
      </SuspensePageLoading>
    </LayoutOneColumn>
  );
};

export default PaginaPage;
