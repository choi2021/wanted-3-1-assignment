import SearchItem from 'components/searchItem/SearchItem';
import React from 'react';
import { SearchType } from 'types/types';
import S from './styles';

interface SearchListProps {
  title: string;
  list: SearchType[];
}

const SearchList = ({ title, list }: SearchListProps) => {
  return (
    <S.List>
      <h3>{title}</h3>
      {list.map((item) => (
        <SearchItem text={item.sickNm} />
      ))}
    </S.List>
  );
};

export default SearchList;
