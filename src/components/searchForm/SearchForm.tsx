import { useDebounce } from 'hooks/useDebounce';
import {
  useKeyword,
  useSearchedDataDispatch,
  useSearchService,
} from 'hooks/useSearch';
import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import S from './styles';
import HTTPError from '../../network/httpError';

type SearchFormProps = {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};

const DELAY_TIME = 300;

const SearchForm = ({ setIsSearching }: SearchFormProps) => {
  const { keyword } = useKeyword();
  const { tempKeyword, setTempKeyword } = useDebounce(DELAY_TIME);
  const dispatch = useSearchedDataDispatch();
  const searchService = useSearchService();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTempKeyword(value);
  };

  const handleFocus = () => {
    setIsSearching(true);
  };
  const handleBlur = () => {
    if (!keyword) {
      setIsSearching(false);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const getResponse = async () => {
    dispatch({ type: 'SET_LOADING', isLoading: true });
    try {
      const response = await searchService?.getSearch(keyword);
      if (response) {
        dispatch({ type: 'SET_DATA', data: response });
        localStorage.setItem(keyword, JSON.stringify(response));
      }
    } catch (e) {
      if (e instanceof HTTPError) {
        dispatch({ type: 'SET_ERROR', error: e.errorMessage });
      }
      console.error(e);
    } finally {
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }
  };

  useEffect(() => {
    const cachedItem = localStorage.getItem(keyword);
    if (keyword) {
      if (cachedItem) {
        const data = JSON.parse(cachedItem);
        dispatch({ type: 'SET_DATA', data });
      } else {
        getResponse();
      }
    }
  }, [keyword]);

  return (
    <S.Form onSubmit={handleSubmit}>
      <BsSearch />
      <input
        type="text"
        value={tempKeyword}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button type="button">검색</button>
    </S.Form>
  );
};

export default SearchForm;
