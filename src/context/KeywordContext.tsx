import { createContext, useState, useMemo, Dispatch } from 'react';

const initialState = {
  keyword: '',
  setKeyword: (keyword: string) => {},
};

export const KeywordContext = createContext(initialState);

export const KeywordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [keyword, setKeyword] = useState('');
  const value = useMemo(() => ({ keyword, setKeyword }), [keyword]);
  return (
    <KeywordContext.Provider value={value}>{children}</KeywordContext.Provider>
  );
};
