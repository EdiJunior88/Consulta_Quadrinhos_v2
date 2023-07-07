import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import Modal from "react-modal";
import { InterfaceAbout } from "../Interface/Interface";

Modal.setAppElement("#root");

const About = ({ name }: InterfaceAbout) => {
  const [modal, setModal] = useState<boolean>(false);

  const openModal = () => {
    setModal(true);
  };

  const closedModal = () => {
    setModal(false);
  };

  //Cálculo do ano atual
  const date = new Date();
  const currentYear = date.getFullYear();

  //Tema personalizado
  const theme = createTheme({
    typography: {
      fontSize: 13,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
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

  return (
    <ThemeProvider theme={theme}>
        <Box>
          <p onClick={openModal}>{name}</p>
          <CssBaseline>
            <Modal isOpen={modal} onRequestClose={closedModal}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={closedModal}>X</button>
              </div>

              <Box sx={{ paddingX: 2, textAlign: "justify", wordWrap: "break-word" }}>
                <Typography sx={{ paddingTop: 2 }}>
                  Projeto Front-End{" "}
                  <strong>
                    (HTML, CSS, JavaScript, React, TypeScript e Material UI)
                  </strong>{" "}
                  com o objetivo de listar com detalhes todos as comics lançadas
                  pela Editora Marvel até o momento ({currentYear}), incluindo
                  os nomes, ano de lançamento e autores de cada Comics, também
                  tem uma página dedicada à todos os heróis, listadas em ordem
                  alfabética.
                </Typography>
                <Typography sx={{ paddingY: 2 }}>
                  Créditos das imagens utilizadas no projeto:
                </Typography>
                <Typography>
                  <strong>Logo Marcel Comics</strong> -{" "}
                  <a
                    href='https://br.pinterest.com/pin/129337820536722495/'
                    target='_blank'>
                    https://br.pinterest.com/pin/129337820536722495/
                  </a>
                </Typography>
                <Typography>
                  <strong>Background</strong> -{" "}
                  <a
                    href='https://www.freepik.com/free-vector/comic-style-background_12300602.htm#query=comic%20background&position=5&from_view=keyword&track=ais'
                    target='_blank'>
                    Freepik
                  </a>
                </Typography>
              </Box>
            </Modal>
          </CssBaseline>
        </Box>
    </ThemeProvider>
  );
};

export default About;
