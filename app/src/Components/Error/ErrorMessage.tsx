import { Container, Typography } from "@mui/material";

const ErrorMessage = () => {
  return (
    <Container maxWidth='xl' sx={{ textAlign: "center", paddingBottom: 8 }}>
      <Typography sx={{ fontSize: "1.3em", fontWeight: "800" }}>
        Um problema inesperado aconteceu, tente novamente mais tarde!
      </Typography>
    </Container>
  );
};

export default ErrorMessage;
