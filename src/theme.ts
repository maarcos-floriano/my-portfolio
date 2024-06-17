import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono"',
  },
});

theme = responsiveFontSizes(theme)

export default theme;