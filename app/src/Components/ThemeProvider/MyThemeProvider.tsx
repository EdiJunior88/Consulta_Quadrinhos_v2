import { ThemeProvider, createTheme } from "@mui/material";
import { InterfaceThemeProvider } from "../Interface/Interface";

//Tema personalizado
//React Context
const theme = createTheme({
  typography: {
    fontFamily: "'Sofia Sans Condensed', 'sans-serif'",
    fontSize: 15,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      body {
        background: url(../../src/assets/background-red.webp) center center no-repeat fixed;
        background-size: cover;
      }
      input:focus {
        outline: none;
        border: 2px solid #F21D55;
      }
      p, input {
        font-family: 'Sofia Sans Condensed', 'sans-serif';
      }
      .titleHeader {
        font-size: 2em;
        font-weight: bolder;
      }
      button {
        border-radius: 8px;
        border: 2px solid #F21D55;
        color: #F21D55;
        cursor: pointer;
        margin: 15px;
        padding: 5px 10px;
        font-weight: bolder;
      }
      `,
    },
  },
});

const MyThemeProvider = ({ children }: InterfaceThemeProvider) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
