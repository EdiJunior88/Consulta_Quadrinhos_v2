import { Box, Button, Container } from "@mui/material";
import ArrowUp from "../../assets/arrow_up_icon.svg";
import ArrowDown from "../../assets/arrow_down_icon.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Container
      maxWidth='xl'
      className='containerHeader'
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFF",
        height: 50,
        position: "fixed",
        bottom: 0,
        marginTop: 50,
      }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <span>
            © {new Date().getFullYear()} MARVEL. Todos os direitos reservados.
          </span>

          <Box>
            <Button onClick={scrollToTop}>
              <img className='imageIconFooter' src={ArrowUp} alt='Arrow Up' />
            </Button>
            <Button onClick={scrollToBottom}>
              <img
                className='imageIconFooter'
                src={ArrowDown}
                alt='Arrow Down'
              />
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Footer;
