import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// criar uma tipagem para o modulo styled components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
