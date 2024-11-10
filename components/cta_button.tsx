import * as React from 'react'
import { Button, type ButtonProps, useTheme } from 'react-native-paper'

const CtaButton = (props: ButtonProps) => {
  const theme = useTheme()

  return (
    <Button
      buttonColor={theme.colors.secondary}
      textColor={theme.colors.onSecondary}
      style={{
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
      }}
      contentStyle={
        props.compact != null
          ? undefined
          : {
              height: 56
            }
      }
      mode="contained"
      theme={{ fonts: { labelLarge: theme.fonts.titleMedium } }}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default CtaButton
