import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { HomeScreenNavigationProps } from '../routes/routes.d';

export default function HomeScreen({ navigation }: HomeScreenNavigationProps) {
  return (
    <View style={styles.container}>
      <Button
        title="Workout Screen" onPress={() => {
          navigation.navigate('Workout');
        }}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
