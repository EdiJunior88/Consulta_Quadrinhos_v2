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
    <div>
      <input
        type='text'
        placeholder='Digite um nome: Thor, Hulk, Spider-Man...'
        onChange={(event) => setText(event.target.value)}
        value={text}
        onKeyDown={inputKeyboard}
      />
    </div>
  );
};

export default Search;
