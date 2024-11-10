import * as React from 'react';
import { type PropsWithChildren } from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { Link, useNavigation, useRouter } from "expo-router";

interface HeaderProps {
  title?: string
  noBack?: boolean
  onBack?: () => void
}

const Header = ({
  title,
  noBack,
  onBack,
  children
}: PropsWithChildren<HeaderProps>) => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <Appbar.Header
      mode="small"
      theme={{ colors: { surface: theme.colors.background } }}
    >
      {noBack == null && (
        <Appbar.Action
          icon="arrow-left"
          onPress={onBack ?? navigation.goBack}
        />
      )}
      {title != null && <Appbar.Content title={title} />}
      {children}
    </Appbar.Header>
  )
}

export default Header
