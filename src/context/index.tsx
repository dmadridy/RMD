import { createContext } from 'react';

type PageContext = {
  page: number;
  nextPage: (page: number) => void;
  previousPage: (page: number) => void;
};

export const PageContext = createContext({
  page: 1,
  nextPage: (page: number) => {},
  previousPage: (page: number) => {},
});
