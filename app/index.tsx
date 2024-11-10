import { PaperProvider } from 'react-native-paper'

import {
  darkTheme,
  lightTheme
} from '../modules/utils/style'
import { StatusBar, useColorScheme } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import TodoList from './todo/list';

export default function Main() {
  const scheme = useColorScheme()

  return (
    <PaperProvider
      theme={scheme === 'dark' ? darkTheme : lightTheme}
    >
      <StatusBar
          backgroundColor={scheme === 'dark' ? 'black' : 'white'}
          barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Stack>
          <TodoList/>
        </Stack>
    </PaperProvider>
  )
}
