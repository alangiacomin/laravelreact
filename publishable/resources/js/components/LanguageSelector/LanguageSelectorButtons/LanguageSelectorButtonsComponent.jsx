import { PropTypes } from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageSelectorButtonsComponent = (props) => {
  const { langs } = props;
  const { i18n } = useTranslation();
  return (
    <>
      {langs.map((l) => (
        <Button
          key={l}
          variant="dark"
          active={i18n.language === l}
          onClick={() => i18n.changeLanguage(l)}
        >{l}
        </Button>
      ))}
    </>
  );
};

LanguageSelectorButtonsComponent.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LanguageSelectorButtonsComponent;
