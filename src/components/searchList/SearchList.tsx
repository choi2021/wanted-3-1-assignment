import SearchItem from 'components/searchItem/SearchItem';
import S from './styles';
import { useKeyword, useSearchedDataState } from '../../hooks/useSearch';

interface SearchListProps {
  title: string;
}

const SearchList = ({ title }: SearchListProps) => {
  const list = useSearchedDataState().data;
  const { keyword } = useKeyword();
  const noText = !keyword;
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
