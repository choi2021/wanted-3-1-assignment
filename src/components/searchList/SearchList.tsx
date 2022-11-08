import React from 'react';
import { BsSearch } from 'react-icons/bs';
import S from './styles';

type SearchResult = {
  sickCd: string;
  sickNm: string;
};

interface SearchListProps {
  title: string;
  list: SearchResult[];
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
