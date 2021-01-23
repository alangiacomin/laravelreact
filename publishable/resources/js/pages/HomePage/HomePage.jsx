import { setDocumentTitle } from '@alangiacomin/js-utils';
import React, { lazy } from 'react';
import { Container } from 'react-bootstrap';
import LayoutTopFooter from '../../components/LayoutTopFooter';
import SuspensePageLoading from '../../components/Suspense/SuspensePageLoading';

const Home = lazy(() => import('./Home'));

const HomePage = (props) => {
  setDocumentTitle();
  return (
    <LayoutTopFooter>
      <Container>
        <SuspensePageLoading>
          <Home {...props} />
        </SuspensePageLoading>
      </Container>
    </LayoutTopFooter>
  );
};

export default HomePage;
