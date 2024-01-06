import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#41444F',
      light: '#575A67',
      dark: '#32323A',
    },
    secondary: {
      main: '#FFF3AD',
    },
    success: {
      main: '#04C75B',
    },
    info: {
      main: '#608CEF',
    },
    error: {
      main: '#FF5658',
    },
    background: {
      paper: '#F9F9F9',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: '"Noto Sans KR", sans-serif',
  },
};

export const theme = createTheme(themeOptions);
