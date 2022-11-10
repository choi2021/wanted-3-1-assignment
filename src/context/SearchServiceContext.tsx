import React, { createContext } from 'react';
import SearchServiceImpl from '../service/SearchService';
import HttpClient from '../network/httpClient';

const client = new HttpClient(process.env.REACT_APP_BASE_URL || '');
const searchService = new SearchServiceImpl(client.httpClient);

export const SearchServiceContext = createContext<SearchServiceImpl | null>(
  null
);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SearchServiceContext.Provider value={searchService}>
      {children}
    </SearchServiceContext.Provider>
  );
};
