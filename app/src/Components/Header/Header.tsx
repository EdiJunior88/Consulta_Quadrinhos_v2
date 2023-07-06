import { Link } from "react-router-dom";
import logo from "../../assets/marvel-comics-logo.svg";
import { InterfaceHeader } from "../Interface/Interface";
import { Box, Container } from "@mui/material";

const Header = ({ to, name }: InterfaceHeader) => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F21D55",
      }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "auto",
            height: 90,
            paddingY: 2,
            paddingLeft: 15,
          }}>
          <img src={logo} alt='Marvel Logo' />
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingRight: 9,
        }}>
        <Link to={to} style={{ textDecoration: "none", fontSize: "1.5em" }}>
          {name}
        </Link>
      </Box>
    </Container>
  );
};

export default Header;
