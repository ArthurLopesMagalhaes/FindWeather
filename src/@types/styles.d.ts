declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      dark: string;
      dark100: string;
      dark200: string;
      dark300: string;
      dark400: string;
    };

    fontFamily: {
      bold: string;
      semibold: string;
      regular: string;
      light: string;
    };

    fontSize: {
      xxxs: number;
      xxs: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xx: number;
      xl: number;
      giant: number;
    };
  }
}
