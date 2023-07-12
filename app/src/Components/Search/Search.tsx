import { Box } from "@mui/material";
import { useState } from "react";
import { InterfaceSearch } from "../Interface/Interface";

const Search = ({ filter }: InterfaceSearch) => {
  const [text, setText] = useState("");

  //Ao pressionar enter, vai executar a função filter
  //passando o valor do input como parâmetro.
  const inputKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      filter(text);
      // console.log(text);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginY: 10 }}>
      <input
        style={{
          borderRadius: 8,
          width: 400,
          height: 35,
          fontSize: 22,
          paddingLeft: 10,
        }}
        className='inputSearch'
        type='text'
        placeholder='Digite um nome: Thor, Hulk, Spider-Man...'
        onChange={(event) => setText(event.target.value)}
        value={text}
        onKeyDown={inputKeyboard}
      />
    </Box>
  );
};

export default Search;
