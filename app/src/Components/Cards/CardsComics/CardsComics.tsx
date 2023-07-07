import { useState } from "react";
import Modal from "react-modal";
import { InterfaceCardsComics } from "../../Interface/Interface";
import { Box, Typography } from "@mui/material";
import MyThemeProvider from "../../ThemeProvider/MyThemeProvider";

Modal.setAppElement("#root");

const CardsComics = ({
  author,
  name,
  image,
  description,
}: InterfaceCardsComics) => {
  const [modal, setModal] = useState<boolean>(false);

  const openModal = () => {
    setModal(true);
  };

  const closedModal = () => {
    setModal(false);
  };

  return (
    <MyThemeProvider>
      <Box>
        <Box
          sx={{
            textAlign: "center",
            cursor: "pointer",
            width: "200px",
            margin: "0 auto",
          }}
          onClick={openModal}>
          <span style={{ fontSize: "1.1em", fontWeight: "800"}}>{name}</span>
          <Box>
            <img
              style={{
                width: "100%",
                height: "auto",
                marginTop: "10px",
                borderRadius: "10px",
              }}
              src={image?.path + ".jpg"}
              alt={name}
            />
          </Box>
        </Box>

        <Modal isOpen={modal} onRequestClose={closedModal}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={closedModal}>X</button>
          </Box>

          <Box sx={{ padding: "15px" }}>
            <Box
              sx={{
                paddingBottom: "15px",
                textIndent: "35px",
                textAlign: "justify",
              }}>
              {description ? (
                <Typography sx={{ fontWeight: "bold" }}>
                  {description}
                </Typography>
              ) : (
                <Typography>🚫 Sem descrição</Typography>
              )}
            </Box>

            <Box>
              <Typography>📚 Autor(es): {author}</Typography>
            </Box>
          </Box>
        </Modal>
      </Box>
    </MyThemeProvider>
  );
};

export default CardsComics;
