import { ThemeProvider, createTheme } from "@mui/material";
import { InterfaceThemeProvider } from "../Interface/Interface";
import backgroundBlue from "../../assets/background-blue.webp";

//Tema personalizado (Azul)
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
        background: url(${backgroundBlue}) 100% no-repeat fixed;
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
        font-size: 0.95em;
      }
      .imageIconFooter {
        height: 35px;
      }
      @media (width <= 460px) {
        .logo {
          height: 50px;
          padding: 0 20px
        }
        .titleHeader {
          font-size: 1.7em;
        }
        input, input[type="text"], input::placeholder{
          font-size: 0.63em;
        }
        .textAbout {
          font-size: 0.5em;
        }
        .footerText {
          font-size: 0.6em;
        }
        .imageIconFooter {
          width: 25px;
        }
        .containerHeader {
          font-size: 0.9em;
        }
        .textAbout {
          font-size: 0.8em;
        }
        .buttonClosedModal {
          width: 27px;
          height: 25px;
          font-size: 0.6em;
          padding-left: 8px;
        }
        .MuiButton-root {
          min-width: 40px;
        }
        .buttonFooter {
          min-width: 40px;
        }
      }
      `,
    },
  },
});

const MyThemeBlueProvider = ({ children }: InterfaceThemeProvider) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeBlueProvider;
