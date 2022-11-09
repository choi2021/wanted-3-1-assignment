import SearchList from 'components/searchList/SearchList';
import S from './styles';

const SearchBoard = () => {
  return (
    <S.Wrapper>
      <SearchList title="추천 검색어" />
    </S.Wrapper>
  );
};

export default SearchBoard;
