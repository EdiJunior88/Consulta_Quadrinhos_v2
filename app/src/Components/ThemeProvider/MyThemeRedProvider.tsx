import { ThemeProvider, createTheme } from "@mui/material";
import { InterfaceThemeProvider } from "../Interface/Interface";
import backgroundRed from "../../assets/background-red.webp"

//Tema personalizado (Vermelho)
//React Context
const theme = createTheme({
  typography: {
    fontFamily: "'Sofia Sans Condensed', 'sans-serif'",
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      body {
        background: url(${backgroundRed}) 50% no-repeat fixed;
        background-size: cover;
      }
      input, input[type="text"], input::placeholder {
        border-color: #F21D55;
        color: #F21D55;
      }
      input:focus {
        outline: none;
        border: 2px solid #F21D55;
      }
      p, input {
        font-family: 'Sofia Sans Condensed', 'sans-serif';
      }
      .containerHeader {
        background: #EB104B;
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

const MyThemeRedProvider = ({ children }: InterfaceThemeProvider) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeRedProvider;
