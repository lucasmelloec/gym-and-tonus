import React, { useMemo } from 'react';
import { getLocales } from 'expo-localization';

import I18Next from './infra/services/i18n/I18next';
import { I18nContextProvider } from './infra/services/i18n/I18n';
import Routes from './ui/routes';

const language = getLocales()[0]?.languageCode || 'en';

export default function App() {
  const i18n = useMemo(() => new I18Next(language), []);
  return (
    <I18nContextProvider
      value={{
        t: i18n.translate.bind(i18n),
      }}
    >
      <Routes />
    </I18nContextProvider>
  );
}
