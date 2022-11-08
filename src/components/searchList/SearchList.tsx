import React from 'react';
import { BsSearch } from 'react-icons/bs';
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
        <li>
          <BsSearch />
          <span>{item.sickNm}</span>
        </li>
      ))}
    </S.List>
  );
};

export default SearchList;
