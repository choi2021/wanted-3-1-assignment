import React, { createContext } from 'react';
import SearchServiceImpl from '../service/SearchService';
import HttpClient from '../network/httpClient';

const httpClient = new HttpClient(process.env.REACT_APP_BASE_URL || '');
const searchService = new SearchServiceImpl(httpClient.create());

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
