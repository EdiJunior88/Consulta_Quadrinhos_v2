import { useEffect, useState } from "react";
import md5 from "md5";
import axios from "axios";
import { InterfaceCardsHeroes } from "../../Components/Interface/Interface";
import Search from "../../Components/Search/Search";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { Box } from "@mui/material";
import CardsHeroes from "../../Components/Cards/CardsHeroes/CardsHeroes";
import MyThemeBlueProvider from "../../Components/ThemeProvider/MyThemeBlueProvider";

const Heroes = () => {
  const url = "https://gateway.marvel.com/v1/public/";
  const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;
  const date = Number(new Date());
  const hash = md5(date + privateKey + publicKey);

  const [heroes, setHeroes] = useState<Array<InterfaceCardsHeroes>>([]);
  const [searchResult, setSearchResult] = useState("");
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  /* Evita Carregar a API sem ter alguma informação digitada no input */
  useEffect(() => {
    if (searchResult !== "") {
      apiHeroes();
    }
  }, [searchResult, limit, offset]);

  /* Função para chamar a API através do input text */
  /* O resultado digitado no input text fica armazenado no Hook resultadoPesquisa */
  /* O Hook limite se refere ao máximo de solicitações por vez da API (100 solicitações por vez) */
  /* O Hook offset reinicia a contagem do hook limite para não dar um erro de chamada da API caso ultrapasse o limite */
  const apiHeroes = () => {
    axios
      .get(
        `${url}characters?nameStartsWith=${searchResult}&ts=${date}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=name`
      )
      .then((response) => {
        setHeroes(response.data.data.results);
        console.log("CHAMANDO API", response);
      })
      .catch((errorAPI) => {
        console.log(errorAPI);
      });
  };

  /* Acrescentando mais 30 novos resultados e chamando a API */
  const moreHeroes = () => {
    setLimit((currentLimit) => currentLimit + 30);
    apiHeroes();
  };

  return (
    <MyThemeBlueProvider>
      <header>
        <Header name='Home' to='/' />
      </header>
      <section>
        <Search
          filter={(searchResult) => {
            setSearchResult(searchResult);
          }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gridTemplateRows: "repeat(2, 1fr)",
            gridRowGap: "30px",
            width: "100%",
            gridAutoFlow: "row",
          }}>
          {heroes.map((hero) => {
            return (
              <CardsHeroes
                key={hero.id}
                name={hero.name}
                alt={hero.name}
                image={hero.thumbnail}
                description={hero.description}
                comicsTitle={hero.comics?.items.map((heroes, id) => {
                  return <span key={id}>{heroes.name}</span>;
                })}
              />
            );
          })}
        </Box>
        {searchResult !== "" &&
          (limit <= 90 ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => {
                  setTimeout(() => {
                    moreHeroes();
                  }, 500);
                }}
                name='Mais Comics'
              />
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() =>
                  setTimeout(() => {
                    setLimit((currentLimit) => currentLimit - 30),
                      setOffset(offset + 100);
                    moreHeroes();
                  }, 500)
                }
                name='Mais Heróis'
              />
            </Box>
          ))}
      </section>
    </MyThemeBlueProvider>
  );
};

export default Heroes;
