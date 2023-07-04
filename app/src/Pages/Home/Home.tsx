import { useEffect, useState } from "react";
import md5 from "md5";
import CardsComics from "../../Components/Cards/CardsComics/CardsComics";
import { InterfaceCardsComics } from "../../Components/Interface/Interface";
import axios from "axios";
import Search from "../../Components/Search/Search";

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

  useEffect(() => {
    if (searchResult !== "") {
      apiComics();
    }
  }, [searchResult, limit]);

  function apiComics() {
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
  }

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
      </section>
    </div>
  );
};

export default Home;
