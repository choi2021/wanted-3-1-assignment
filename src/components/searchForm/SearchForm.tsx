import {
  useKeyword,
  useSearchedDataDispatch,
  useSearchService,
} from 'hooks/useSearch';
import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import S from './styles';

const SearchForm = () => {
  const { keyword, setKeyword } = useKeyword();
  const dispatch = useSearchedDataDispatch();
  const searchService = useSearchService();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setKeyword(value);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await searchService?.getSearch(keyword);
      dispatch({ type: 'SET_DATA', data: response });
    };
    keyword && getData();
  }, [keyword]);

  return (
    <S.Form>
      <BsSearch />
      <input type="text" value={keyword} onChange={handleChange} />
      <button type="button">검색</button>
    </S.Form>
  );
};

export default SearchForm;
