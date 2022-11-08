import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      grey: string;
      blue: string;
      bg: string;
    };
  }
}
