import SearchList from 'components/searchList/SearchList';
import S from './styles';
import { useSearchedDataState } from '../../hooks/useSearch';

const SearchBoard = () => {
  const list = useSearchedDataState().data;
  const noText = list.length === 0;
  return (
    <S.Wrapper>
      {noText && <span>검색어 없음</span>}
      {!noText && <SearchList title="추천 검색어" list={list} />}
    </S.Wrapper>
  );
};

export default SearchBoard;
