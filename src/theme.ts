import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#41444E',
    },
    secondary: {
      main: '#02C75A',
    },
    success: {
      main: '#02C75A',
    },
    info: {
      main: '#608CEF',
    },
    error: {
      main: '#FF5557',
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
