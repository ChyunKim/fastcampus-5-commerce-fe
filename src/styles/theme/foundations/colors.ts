import { getColorSchema } from '@utils/color-generator';

const Light = {
  primary: getColorSchema('#FF710B'),
  secondary: getColorSchema('#FFAB2E'),
  warning: getColorSchema('#FF6060'),
  success: getColorSchema('#FF710B'),
  gray: {
    50: '#FDFDFD',
    100: '#F9F9F9',
    200: '#F2F3F4',
    300: '#EAECF0',
    400: '#CBCED6',
    500: '#A8ADBA',
    600: '#8C919F',
    700: '#757983',
    800: '#4A4D55',
    900: '#292A2E',
  },
  black: '#1A1A1A',
  white: '#FFFFFF',
  background: {
    primary: '#FFFFFF',
    secondary: '#F9F9F9',
    tertiary: '#F2F3F4',
  },
  modal: '#FFFFFF',
};

const Dark = {
  primary: getColorSchema('#FF710B'),
  secondary: getColorSchema('#FFAB2E'),
  warning: getColorSchema('#FF6060'),
  success: getColorSchema('#FF710B'),
  gray: {
    50: '#FDFDFD',
    100: '#F9F9F9',
    200: '#F2F3F4',
    300: '#EAECF0',
    400: '#CBCED6',
    500: '#A8ADBA',
    600: '#8C919F',
    700: '#757983',
    800: '#4A4D55',
    900: '#292A2E',
  },
  black: '#E5E7EC',
  white: '#232325',
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Brand = {
  kakao: {
    500: '#FFDE32',
    600: '#F5D322',
    700: '#EFCC1A',
  },
  naver: {
    500: '#20CF5D',
    600: '#17c554',
    700: '#14bf50',
  },
  facebook: {
    500: '#1877F3',
    600: '#1874eb',
    700: '#146cdf',
  },
  google: {
    500: '#FFFFFF',
    600: '#F5F5F5',
    700: '#EEEEEE',
  },
  apple: {
    500: '#000000',
    600: '#111111',
    700: '#222222',
  },
};

const Dim = {
  primary: '#1A1A1A50',
  secondary: '#1A1A1A20 ',
};

const mode = {
  light: Light,
  dark: Dark,
};

const colors = {
  ...Light,
  ...Brand,
  dim: {
    ...Dim,
  },
};

export { mode, Brand, Light, Dark, Dim };

export default colors;
