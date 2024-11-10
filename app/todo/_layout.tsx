import Header from '@/components/header';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-paper';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        header: () => {
          return (
            <Header title="Todo Details"/>
          )
        }
      }}/>
  );
}
