import { Box, Container } from "@mui/material";
import { InterfaceButton } from "../Interface/Interface";

const Button = ({ onClick, name }: InterfaceButton) => {
  return (
    <Container
      maxWidth='xl'
      sx={{ display: "flex", justifyContent: "center", paddingBottom: 8 }}>
      <Box>
        <button onClick={onClick}>{name}</button>
      </Box>
    </Container>
  );
};

export default Button;
