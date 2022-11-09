import { useDebounce } from 'hooks/useDebounce';
import {
  useKeyword,
  useSearchedDataDispatch,
  useSearchService,
} from 'hooks/useSearch';
import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import S from './styles';

const DELAY_TIME = 300;

const SearchForm = () => {
  const { keyword } = useKeyword();
  const { tempKeyword, setTempKeyword } = useDebounce(DELAY_TIME);
  const dispatch = useSearchedDataDispatch();
  const searchService = useSearchService();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTempKeyword(value);
  };

  useEffect(() => {
    const getResponse = async () => {
      const response = await searchService?.getSearch(keyword);
      dispatch({ type: 'SET_DATA', data: response });
    };
    if (keyword) {
      getResponse();
    }
  }, [keyword]);

  return (
    <S.Form>
      <BsSearch />
      <input type="text" value={tempKeyword} onChange={handleChange} />
      <button type="button">검색</button>
    </S.Form>
  );
};

export default SearchForm;
