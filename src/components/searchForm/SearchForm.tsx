import { useSearchedDataDispatch } from 'hooks/useSearch';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import S from './styles';

const SearchForm = () => {
  const [text, setText] = useState('');
  const dispatch = useSearchedDataDispatch();

  return (
    <S.Form>
      <BsSearch />
      <input type="text" />
      <button type="button">검색</button>
    </S.Form>
  );
};

export default SearchForm;
