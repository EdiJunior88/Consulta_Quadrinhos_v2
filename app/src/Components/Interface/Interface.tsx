export interface InterfaceCardsComics {
  id?: number;
  key?: number;
  creators?: { items: { name: string }[] };
  author?: JSX.Element[];
  image?: { path: string };
  name?: string;
  description?: string | null;
  title?: string;
  thumbnail?: { path: string };
}

export interface InterfaceCardsHeroes {
  id?: number;
  key?: number;
  alt?: string;
  author?: JSX.Element[];
  image?: { path: string };
  name?: string;
  description?: string | null;
  title?: string;
  thumbnail?: { path: string };
  comics?: {
    items: Array<{ name: string }>;
  };
  comicsTitle?: JSX.Element[];
}

export interface InterfaceComicsGet {
  resultSearch: number;
  limit: number;
  offset: number;
}

export interface InterfaceButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
}

export interface InterfaceHeader {
  name: string;
  to: string;
}

export interface InterfaceSearch {
  filter: (searchResult: string) => void;
}

export interface InterfaceAbout {
  name: string;
}

export interface InterfaceThemeProvider {
  children: React.ReactNode;
}
