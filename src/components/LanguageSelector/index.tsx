import EnglandFlag from '@Assets/icons/flags/en.svg';
import SpanishFlag from '@Assets/icons/flags/es.svg';
import IconButton from '@Components/IconButton';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
      i18n.language;
    }
  };

  return (
    <>
      <IconButton
        ariaLabel="es"
        disabled={i18n.language === 'es' || i18n.language === 'es-ES'}
        iconAlt="spanish"
        iconSrc={SpanishFlag}
        iconWidth="1.5rem"
        id="language-es"
        onClick={() => changeLanguage('es')}
      />
      <IconButton
        ariaLabel="en"
        disabled={i18n.language === 'en' || i18n.language === 'en-US'}
        iconAlt="english"
        iconSrc={EnglandFlag}
        iconWidth="1.5rem"
        id="language-en"
        onClick={() => changeLanguage('en')}
      />
    </>
  );
};

export default withTranslation()(LanguageSelector);
