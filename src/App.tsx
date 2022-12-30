import React, { useMemo } from 'react';
import { getLocales } from 'expo-localization';
import { StyleSheet, View } from 'react-native';

import I18Next from './infra/services/i18n/I18next';
import { I18nContextProvider } from './infra/services/i18n/I18n';

const language = getLocales()[0]?.languageCode || 'en';

export default function App() {
  const i18n = useMemo(() => new I18Next(language), []);
  return (
    <I18nContextProvider
      value={{
        t: i18n.translate.bind(i18n),
      }}
    >
      <View style={styles.container} />
    </I18nContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
