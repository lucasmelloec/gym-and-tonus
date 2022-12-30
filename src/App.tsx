import React, { useMemo } from 'react';
import { getLocales } from 'expo-localization';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import I18Next from './infra/services/i18n/I18next';
import { I18nContextProvider } from './infra/services/i18n/I18n';
import HomeScreen from './ui/screens/HomeScreen';

const language = getLocales()[0]?.languageCode || 'en';

const Stack = createNativeStackNavigator();

export default function App() {
  const i18n = useMemo(() => new I18Next(language), []);
  return (
    <I18nContextProvider
      value={{
        t: i18n.translate.bind(i18n),
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nContextProvider>
  );
}
