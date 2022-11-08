import React from 'react';
import { BsSearch } from 'react-icons/bs';
import S from './styles';

const SearchForm = () => {
  return (
    <S.Form>
      <BsSearch />
      <input type="text" />
      <button type="button">검색</button>
    </S.Form>
  );
};

export default SearchForm;
