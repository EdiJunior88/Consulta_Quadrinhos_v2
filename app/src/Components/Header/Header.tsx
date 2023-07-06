import { Link } from "react-router-dom";
import logo from "../../assets/marvel-comics-logo.svg";
import { InterfaceHeader } from "../Interface/Interface";
import { Box, Container } from "@mui/material";

const Header = ({ to, name }: InterfaceHeader) => {
  return (
    <Container
      maxWidth='xl'
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "auto",
            height: "90px",
          }}>
          <img src={logo} alt='Marvel Logo' />
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Link to={to} style={{ textDecoration: "none" }}>
          {name}
        </Link>
      </Box>
    </Container>
  );
};

export default Header;
