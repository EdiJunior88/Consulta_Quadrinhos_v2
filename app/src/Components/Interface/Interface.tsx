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

export interface InterfaceComicsGet {
  resultSearch: number;
  limit: number;
  offset: number;
}
