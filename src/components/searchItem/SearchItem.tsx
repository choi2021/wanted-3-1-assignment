import { useKeyword } from 'hooks/useSearch';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import splitByKeyword from '../../utils/splitByKeyword';

interface SearchItemProps {
  text: string;
}
const KEYWORD_INDEX = 1;

const Wrapper = styled.li`
  b {
    font-weight: bold;
  }
`;

const SearchItem = ({ text }: SearchItemProps) => {
  const { keyword } = useKeyword();
  const textArray = splitByKeyword(keyword, text);
  return (
    <Wrapper>
      <BsSearch />
      <span>
        {textArray.map((item, idx) => {
          if (idx === KEYWORD_INDEX) {
            return <b key={item}>{item}</b>;
          }
          return item;
        })}
      </span>
    </Wrapper>
  );
};

export default SearchItem;
