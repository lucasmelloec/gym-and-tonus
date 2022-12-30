import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useI18n } from '../../infra/services/i18n/I18n';

export default function HomeScreen() {
  const { t } = useI18n();
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>{t('welcome', 'welcome to home')}</Text>
    </View>
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
