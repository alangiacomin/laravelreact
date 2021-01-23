import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const TopNavbarItemComponent = (props) => {
  const {
    to, exact, isActive, title,
  } = props;
  const { t } = useTranslation('routes');
  return (
    <>
      {(to || '').startsWith('http') ? (
        <a className="nav-link" href={to}>
          {t(title)}
        </a>
      ) : (
        <NavLink
          className="nav-link"
          to={to}
          exact={exact}
          isActive={isActive}
        >
          {t(title)}
        </NavLink>
      )}
    </>
  );
};

TopNavbarItemComponent.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  isActive: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopNavbarItemComponent;
