import { BsSearch } from 'react-icons/bs';
import { Link, useSearchParams } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import splitByKeyword from '../../utils/splitByKeyword';
import S from './styles';

interface SearchItemProps {
  text: string;
  active: boolean;
  index: number;
  setCursor: React.Dispatch<React.SetStateAction<number>>;
}
const DELAY_TIME = 200;
const KEYWORD_INDEX = 1;

const SearchItem = ({ text, active, index, setCursor }: SearchItemProps) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const textArray = splitByKeyword(query, text);
  const handleMouseMove = () => {
    const debounce = setTimeout(() => {
      setCursor(index);
    }, DELAY_TIME);
    return () => clearTimeout(debounce);
  };
  useEffect(() => {
    if (active) {
      itemRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  });
  return (
    <Link to={`/search?q=${text}`}>
      <S.Wrapper ref={itemRef} active={active} onMouseMove={handleMouseMove}>
        <BsSearch />
        <span>
          {textArray.map((item, idx) => {
            if (idx === KEYWORD_INDEX) {
              return <b key={item}>{item}</b>;
            }
            return item;
          })}
        </span>
      </S.Wrapper>
    </Link>
  );
};

export default SearchItem;
