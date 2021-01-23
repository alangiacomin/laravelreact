import { absoluteUrl } from '@alangiacomin/js-utils';
import { PropTypes } from 'prop-types';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const ErrorBoundaryComponent = (props) => {
  const { homepageRoute } = props;
  return (
    <div
      style={{
        backgroundColor: '#2c2c2c',
      }}
    >
      <div
        className="ml-auto mr-auto"
        style={{
          maxWidth: '1280px',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#000000',
          backgroundImage: `url('${absoluteUrl('assets/img/broken.png')}')`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className="float-right pt-4 pr-5"
          style={{
            color: '#ffffff',
          }}
        >
          <h2>Ops! Si è rotto qualcosa</h2>
          <h4>Errore imprevisto</h4>
          <LinkContainer to={homepageRoute} as="a">
            Homepage
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

ErrorBoundaryComponent.propTypes = {
  homepageRoute: PropTypes.string.isRequired,
};

export default ErrorBoundaryComponent;
