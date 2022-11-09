import SearchItem from 'components/searchItem/SearchItem';
import { useSearchParams } from 'react-router-dom';
import S from './styles';
import { useSearchedDataState } from '../../hooks/useSearch';

interface SearchListProps {
  title: string;
}

const SearchList = ({ title }: SearchListProps) => {
  const list = useSearchedDataState().data;
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const noText = !query;
  return (
    <S.List>
      {noText && <h3>검색어 없음</h3>}
      {!noText && (
        <>
          <h3>{title}</h3>
          {list.map((item) => (
            <SearchItem key={item.sickCd} text={item.sickNm} />
          ))}
        </>
      )}
    </S.List>
  );
};

export default SearchList;
