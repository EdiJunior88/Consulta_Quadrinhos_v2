import { Box } from "@mui/material";
import { useState } from "react";
import { InterfaceSearch } from "../Interface/Interface";

const Search = ({ filter, custom }: InterfaceSearch) => {
  const [text, setText] = useState("");

  const inputKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      filter(text);
      console.log(text);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <input
        style={{
          borderRadius: 8,
          width: 400,
          height: 35,
          fontSize: 22,
          paddingLeft: 10,
          color: "#F21D55",
          fontFamily: "'Sofia Sans Condensed', 'sans-serif'",
          ...custom,
        }}
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
