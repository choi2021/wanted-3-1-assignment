import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import splitByKeyword from '../../utils/splitByKeyword';
import S from './styles';

interface SearchItemProps {
  text: string;
}
const KEYWORD_INDEX = 1;

const SearchItem = ({ text }: SearchItemProps) => {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const textArray = splitByKeyword(query, text);

  return (
    <Link to={`/search?q=${text}`}>
      <S.Wrapper>
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
