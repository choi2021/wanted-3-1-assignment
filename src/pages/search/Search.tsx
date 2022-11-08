import SearchForm from 'components/searchForm/SearchForm';
import { SearchedDataProvider } from 'context/SearchedDataContext';
import { KeywordProvider } from 'context/KeywordContext';
import S from './styles';
import SearchBoard from '../../components/searchBoard/SearchBoard';

const Search = () => {
  return (
    <S.Wrapper>
      <h1>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h1>
      <SearchedDataProvider>
        <KeywordProvider>
          <SearchForm />
          <SearchBoard />
        </KeywordProvider>
      </SearchedDataProvider>
    </S.Wrapper>
  );
};

export default Search;
