import { useEffect, useState } from "react";
import md5 from "md5";
import axios from "axios";
import { InterfaceCardsComics } from "../../Components/Interface/Interface";
import CardsComics from "../../Components/Cards/CardsComics/CardsComics";
import Search from "../../Components/Search/Search";
import Button from "../../Components/Button/Button";

const Home = () => {
  const url = "https://gateway.marvel.com/v1/public/";
  const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;
  const date = Number(new Date());
  const hash = md5(date + privateKey + publicKey);

  const [comics, setComics] = useState<Array<InterfaceCardsComics>>([]);
  const [searchResult, setSearchResult] = useState("");
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  /* Evita Carregar a API sem ter alguma informação digitada no input */
  useEffect(() => {
    if (searchResult !== "") {
      apiComics();
    }
  }, [searchResult, limit, offset]);

  /* Função para chamar a API através do input text */
  /* O resultado digitado no input text fica armazenado no Hook resultadoPesquisa */
  /* O Hook limite se refere ao máximo de solicitações por vez da API (100 solicitações por vez) */
  /* O Hook offset reinicia a contagem do hook limite para não dar um erro de chamada da API caso ultrapasse o limite */
  const apiComics = () => {
    axios
      .get(
        `${url}comics?titleStartsWith=${searchResult}&ts=${date}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=title`
      )
      .then((response) => {
        setComics(response.data.data.results);
        console.log("CHAMANDO API", response);
      })
      .catch((errorAPI) => {
        console.log(errorAPI);
      });
  };

  /* Acrescentando mais 30 novos resultados e chamando a API */
  const moreComics = () => {
    setLimit((currentLimit) => currentLimit + 30);
    apiComics();
  };

  return (
    <div>
      <section>
        <Search
          filter={(searchResult) => {
            setSearchResult(searchResult);
          }}
        />

        {comics.map((comic) => {
          return (
            <CardsComics
              key={comic.id}
              author={comic.creators?.items.map((nameAuthor, id) => (
                <span key={id}>{nameAuthor.name}</span>
              ))}
              image={comic.thumbnail}
              description={comic.description}
            />
          );
        })}

        {searchResult !== "" &&
          (limit <= 90 ? (
            <div>
              <div>
                <Button
                  onClick={() => {
                    setTimeout(() => {
                      moreComics();
                    }, 500);
                  }}
                  name='Mais Comics'
                />
              </div>
            </div>
          ) : (
            <div>
              <Button
                onClick={() =>
                  setTimeout(() => {
                    setLimit((currentLimit) => currentLimit - 30),
                      setOffset(offset + 100);
                    moreComics();
                  }, 500)
                }
                name='Mais Comics'
              />
            </div>
          ))}
      </section>
    </div>
  );
};

export default Home;
