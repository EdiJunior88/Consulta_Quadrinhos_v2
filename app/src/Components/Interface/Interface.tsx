import React from "react";

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
  custom: React.CSSProperties;
}

export interface InterfaceAbout {
  name: string;
}