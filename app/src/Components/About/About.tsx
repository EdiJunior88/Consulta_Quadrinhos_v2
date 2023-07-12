import { Box, CssBaseline, Typography } from "@mui/material";
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

  return (
    <Box>
      <span onClick={openModal}>{name}</span>
      <CssBaseline>
        <Modal isOpen={modal} onRequestClose={closedModal}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={closedModal}>X</button>
          </Box>

          <Box
            sx={{
              paddingX: 2,
              textAlign: "justify",
              wordWrap: "break-word",
            }}>
            <Typography sx={{ paddingTop: 2 }}>
              Projeto Front-End{" "}
              <strong>
                (HTML, CSS, JavaScript, React, TypeScript e Material UI)
              </strong>{" "}
              com o objetivo de listar com detalhes todos as comics lançadas
              pela Editora Marvel até o momento ({currentYear}), incluindo os
              nomes, ano de lançamento e autores de cada Comics, também tem uma
              página dedicada à todos os heróis, listadas em ordem alfabética.
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
                href='https://www.freepik.com/free-vector/comic-abstract-blue-background_7997344.htm#query=comic%20background&position=1&from_view=keyword&track=ais'
                target='_blank'>
                dgim-studio
              </a>
              <span> / </span>
              <a
                href='https://www.freepik.com/free-vector/flat-design-bright-comics-wallpaper_11740828.htm#query=comic%20background&position=3&from_view=keyword&track=ais"'
                target='_blank'>
                FreePik
              </a>
            </Typography>
          </Box>
        </Modal>
      </CssBaseline>
    </Box>
  );
};

export default About;
