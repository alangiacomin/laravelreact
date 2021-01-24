import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SuspenseNull from '../../../components/Suspense/SuspenseNull';
import DummyComponent from './DummyComponent';

const Dummy = (props) => {
  const { user } = props;
  const location = useLocation();
  const { t } = useTranslation('dummy');
  const sottotitolo = t('subtitle');
  const titolo = t('title');
  const contenuti = t('content');
  return (
    <SuspenseNull>
      <DummyComponent
        sottotitolo={sottotitolo}
        titolo={titolo}
        contenuti={contenuti}
      />
    </SuspenseNull>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

Dummy.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};

Dummy.defaultProps = {
  user: {},
};

export default connect(mapStateToProps)(Dummy);
