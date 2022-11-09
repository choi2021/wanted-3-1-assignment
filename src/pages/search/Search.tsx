import SearchForm from 'components/searchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import S from './styles';
import SearchBoard from '../../components/searchBoard/SearchBoard';
import { SearchedDataProvider } from '../../context/SearchedDataContext';

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [params] = useSearchParams();
  const query = params.get('q') || '';

  useEffect(() => {
    if (query) {
      setIsSearching(true);
    }
  }, []);

  return (
    <S.Wrapper>
      <h1>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h1>
      <SearchedDataProvider>
        <SearchForm setIsSearching={setIsSearching} />
        {isSearching && <SearchBoard />}
      </SearchedDataProvider>
    </S.Wrapper>
  );
};

export default Search;
