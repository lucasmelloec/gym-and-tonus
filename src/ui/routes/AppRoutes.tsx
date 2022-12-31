import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useI18n } from '../../infra/services/i18n/I18n';
import { capitalize } from '../../utils';
import HomeScreen from '../screens/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';

import { AppRoutesParamList } from './routes.d';

const Stack = createNativeStackNavigator<AppRoutesParamList>();

export default function AppRoutes() {
  const { t } = useI18n();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTransparent: true }}>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="Workout" options={{ title: capitalize(t('workout', 'workout')) }} component={WorkoutScreen} />
    </Stack.Navigator>
  );
}
