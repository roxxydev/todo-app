import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { StatusBar, useColorScheme } from 'react-native';
import {
  darkTheme,
  lightTheme
} from '../modules/utils/style';
import { PaperProvider, useTheme } from 'react-native-paper';
import Header from '@/components/header';

export const unstable_settings = {
  initialRouteName: '(app)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const scheme = useColorScheme()
  const theme = useTheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <PaperProvider
        theme={scheme === 'dark' ? darkTheme : lightTheme}
      >
        <StatusBar
            backgroundColor={scheme === 'dark' ? 'black' : 'white'}
            barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
          />
          <Stack
            screenOptions={{
              header: () => {
                return null
              },
              contentStyle: {
                backgroundColor: theme.colors.background,
              }
            }}
          />
      </PaperProvider>
    </>
  );
}
