export type AppRoutesParamList = {
  Home: undefined;
  Workout: undefined;
};

export type HomeScreenNavigationProps = NativeStackScreenProps<AppRoutesParamList, 'Home'>;
export type WorkoutScreenNavigationProps = NativeStackScreenProps<AppRoutesParamList, 'Workout'>;
