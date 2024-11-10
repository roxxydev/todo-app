import { type MD3Colors } from 'react-native-paper/lib/typescript/types'

// Color definition guide: https://m3.material.io/styles/color/roles
export const monochromeColors = {
  white: '#FFFFFF',
  black: '#000000'
}

export const appColors = {
  green: '#00B259',
  transparent: 'transparent',
  trustElement: '#505858',
  onboardingAlpha: '#00000088'
}

export const neutralLightColors = {
  neutral0: '#00000000',
  neutral1: '#0000000D',
  neutral2: '#00000012',
  neutral3: '#00000014',
  neutral4: '#00000017',
  neutral5: '#0000001C',
  neutral6: '#0000001F',
  neutral7: '#00000024',
  neutral8: '#00000026',
  neutral9: '#00000029'
}

export const neutralDarkColors = {
  neutral0: '#FFFFFF00',
  neutral1: '#FFFFFF0D',
  neutral2: '#FFFFFF12',
  neutral3: '#FFFFFF14',
  neutral4: '#FFFFFF17',
  neutral5: '#FFFFFF1C',
  neutral6: '#FFFFFF1F',
  neutral7: '#FFFFFF24',
  neutral8: '#FFFFFF26',
  neutral9: '#FFFFFF29'
}

export const lightMD3Colors: MD3Colors = {
  primary: '#3975C8',
  onPrimary: monochromeColors.white,
  primaryContainer: '#DDEAFD',
  onPrimaryContainer: '#4D94F7',

  secondary: '#FFDD00',
  onSecondary: '#0B1F1F',
  secondaryContainer: '#FFEFCF',
  onSecondaryContainer: '#594400',

  tertiary: '#7662CC',
  onTertiary: monochromeColors.white,
  tertiaryContainer: '#F0E4EF',
  onTertiaryContainer: '#44185A',

  background: monochromeColors.white,
  onBackground: '#363636',

  surface: 'rgba(0,0,0,0.05)', // i.e. card, sheets, dialog
  onSurface: '#363636', // text color
  surfaceVariant: 'rgba(0,0,0,0.12)', // surface container
  onSurfaceVariant: '#0B1F1F', // Font heading
  surfaceDisabled: '#00000061', // opacity of 38%
  onSurfaceDisabled: '#0B1F1F',

  error: '#C53135',
  onError: monochromeColors.white,
  errorContainer: '#B91D20',
  onErrorContainer: '#FEECEF',

  outline: '#E5E5E5',
  outlineVariant: '#F9F9F9',

  inverseSurface: '#151F1F',
  inverseOnSurface: '#F8F8F8',
  inversePrimary: '#78C6C8',

  shadow: monochromeColors.black,
  scrim: monochromeColors.black,
  backdrop: 'red',
  elevation: {
    level0: 'transparent',
    level1: 'rgba(0,0,0,0.05)',
    level2: 'rgba(0,0,0,0.08)',
    level3: 'rgba(0,0,0,0.11)',
    level4: 'rgba(0,0,0,0.14)',
    level5: 'rgba(0,0,0,0.16)'
  }
}

export const darkMD3Colors: MD3Colors = {
  primary: '#42FDCC',
  onPrimary: '#0B1F1F',
  primaryContainer: '#A4F2D6',
  onPrimaryContainer: '#34CAA3',

  secondary: '#FFDD00',
  onSecondary: '#0B1F1F', // i.e. button text color
  secondaryContainer: '#FFDF92',
  onSecondaryContainer: '#0B1F1F',

  tertiary: '#7662CC',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#F0E4EF',
  onTertiaryContainer: '#44185A',

  background: '#151F1F',
  onBackground: '#F8F8F8',
  surface: 'rgba(255,255,255,0.11)', // i.e. card, sheets, dialog
  onSurface: '#F8F8F8',
  surfaceVariant: 'rgba(255,255,255,0.16)', // surface container
  onSurfaceVariant: '#F8F8F8',
  surfaceDisabled: '#F8F8F861', // opacity of 38%
  onSurfaceDisabled: '#F8F8F8',

  error: '#FF897F',
  onError: '#FF897F',
  // errorContainer: '#FFDAD6',
  // onErrorContainer: '#93000E',

  errorContainer: '#B91D20',
  onErrorContainer: '#FEECEF',

  outline: '#303134',
  outlineVariant: '#403134',

  inverseSurface: monochromeColors.white,
  inverseOnSurface: '#0B1F1F',
  inversePrimary: '#3CAFB1',

  shadow: monochromeColors.black,
  scrim: monochromeColors.black,
  backdrop: 'red',
  elevation: {
    level0: 'transparent',
    level1: 'rgba(255,255,255,0.05)',
    level2: 'rgba(255,255,255,0.08)',
    level3: 'rgba(255,255,255,0.11)',
    level4: 'rgba(255,255,255,0.14)',
    level5: 'rgba(255,255,255,0.16)'
  }
}
