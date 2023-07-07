import { Link } from "react-router-dom";
import logo from "../../assets/marvel-comics-logo.svg";
import { InterfaceHeader } from "../Interface/Interface";
import { Box, Container } from "@mui/material";
import About from "../About/About";
import MyThemeProvider from "../ThemeProvider/MyThemeProvider";

const Header = ({ to, name }: InterfaceHeader) => {
  return (
    <MyThemeProvider>
      <Container
        maxWidth='xl'
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F21D55",
          color: "#FFF",
        }}>
        <Box className='titleHeader' style={{ cursor: "pointer" }}>
          <About name='Sobre' />
        </Box>

        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: 90,
              paddingY: 2,
            }}>
            <img src={logo} alt='Marvel Logo' />
          </Box>
        </Container>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            gap: 2,
          }}>
          <Link to={to} style={{ textDecoration: "none", color: "#FFF" }}>
            <span className='titleHeader'>{name}</span>
          </Link>
        </Box>
      </Container>
    </MyThemeProvider>
  );
};

export default Header;
