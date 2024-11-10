import { StyleSheet } from 'react-native'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native'
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
  useTheme
} from 'react-native-paper'
import {
  type MD3Theme,
} from 'react-native-paper/lib/typescript/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { appColors, darkMD3Colors, lightMD3Colors } from './colors'


export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: lightMD3Colors
}

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 2,
  colors: darkMD3Colors
}

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  materialLight: lightTheme
})
const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
  materialDark: darkTheme
})

export { LightTheme as NavigationLightTheme }
export { DarkTheme as NavigationDarkTheme }

export const useAppStyle = () => {
  const insets = useSafeAreaInsets()
  const theme = useTheme()
  const style = StyleSheet.create({
    container: {
      paddingLeft: insets.left + 10,
      paddingRight: insets.right + 10
    },
    safeContainer: {
      marginTop: insets.top,
      marginBottom: insets.bottom,
      marginLeft: insets.left + 10,
      marginRight: insets.right + 10
    },
    safeLeft: {
      marginLeft: insets.left + 10
    },
    safeRight: {
      marginRight: insets.right + 10
    },
    safeTop: {
      marginTop: insets.top
    },
    safeBottom: {
      marginBottom: insets.bottom
    },
    safeHorizontal: {
      marginLeft: insets.left + 10,
      marginRight: insets.right + 10
    },
    contentContainer: {
      // Add padding to scrollviews so the bottom text doesnt
      // hide under the tabbar
      paddingBottom: 60,
      backgroundColor: appColors.transparent
    },
    justifyCenter: {
      flex: 1,
      justifyContent: 'center'
    },
    bottom: { bottom: 20, marginTop: 'auto', width: '100%' },
    alignCenter: {
      alignItems: 'center'
    },
    borderTopRadius: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12
    },
    borderBottomRadius: {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12
    },
    borderRadius: { borderRadius: 12 },
    listItem: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      paddingLeft: 10
    }
  })
  return style
}
