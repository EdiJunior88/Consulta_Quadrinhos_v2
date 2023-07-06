import { Box } from "@mui/material";
import { useState } from "react";

const Search = ({ filter }: { filter: (searchText: string) => void }) => {
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
          fontSize: "1.4em",
          paddingLeft: 10,
          fontFamily: "'Sofia Sans Condensed', 'sans-serif'",
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
