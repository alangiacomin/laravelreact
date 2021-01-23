import React from 'react';
import locales from '../../../config/locales';
import LanguageSelectorButtonsComponent from './LanguageSelectorButtonsComponent';

const LanguageSelectorButtons = () => (<LanguageSelectorButtonsComponent langs={locales.availableLanguages} />);

export default LanguageSelectorButtons;
