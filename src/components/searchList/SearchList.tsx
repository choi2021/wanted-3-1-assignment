import SearchItem from 'components/searchItem/SearchItem';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useKeyPress } from 'hooks/useKeyPress';
import { useState, useEffect } from 'react';
import S from './styles';
import { useSearchedDataState } from '../../hooks/useSearch';

interface SearchListProps {
  title: string;
}

const SearchList = ({ title }: SearchListProps) => {
  const [cursor, setCursor] = useState(-1);
  const [isMovingMouse, setIsMovingMouse] = useState(false);
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const list = useSearchedDataState().data;
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const noText = !query;
  const navigate = useNavigate();
  useEffect(() => {
    if (list.length && downPress) {
      setIsMovingMouse(false);
      setCursor((prevState) =>
        prevState < list.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (list.length && upPress) {
      setIsMovingMouse(false);
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  useEffect(() => {
    if (list.length && enterPress) {
      setIsMovingMouse(false);
      const target = list[cursor];
      navigate(`/search?q=${target.sickNm}`);
    }
  }, [cursor, enterPress]);

  return (
    <S.List>
      {noText && <h3>검색어 없음</h3>}
      {!noText && (
        <>
          <h3>{title}</h3>
          {list.map((item, idx) => (
            <SearchItem
              key={item.sickCd}
              text={item.sickNm}
              active={cursor === idx}
              isMovingMouse={isMovingMouse}
              setIsMovingMouse={setIsMovingMouse}
              setCursor={setCursor}
              index={idx}
            />
          ))}
        </>
      )}
    </S.List>
  );
};

export default SearchList;
