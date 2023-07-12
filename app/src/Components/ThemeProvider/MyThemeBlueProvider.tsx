import { ThemeProvider, createTheme } from "@mui/material";
import { InterfaceThemeProvider } from "../Interface/Interface";
import backgroundBlue from "../../assets/background-blue.webp";

//Tema personalizado (Azul)
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
        background: url(${backgroundBlue}) 50% no-repeat fixed;
        background-size: cover;
      }
      input, input[type="text"], input::placeholder {
        border-color: #28BBEB;
        color: #28BBEB;
      }
      input:focus {
        outline: none;
        border: 2px solid #28BBEB;
      }
      p, input {
        font-family: 'Sofia Sans Condensed', 'sans-serif';
      }
      .containerHeader {
        background: #03789E;
      }
      .titleHeader {
        font-size: 2em;
        font-weight: bolder;
      }
      button {
        border-radius: 8px;
        border: 2px solid #28BBEB;
        color: #28BBEB;
        cursor: pointer;
        margin: 15px;
        padding: 5px 10px;
        font-weight: bolder;
      }
      `,
    },
  },
});

const MyThemeBlueProvider = ({ children }: InterfaceThemeProvider) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeBlueProvider;
