import * as React from 'react'
import { Divider, type DividerProps } from 'react-native-paper'

const AppDivider = (props: DividerProps) => {
  return <Divider bold style={{ margin: 4 }} {...props} />
}

export default AppDivider
