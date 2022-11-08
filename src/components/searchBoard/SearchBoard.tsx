import SearchList from 'components/searchList/SearchList';
import S from './styles';

const list = [
  {
    sickCd: 'C22',
    sickNm: '간 및 간내 담관의 악성 신생물',
  },
  {
    sickCd: 'C23',
    sickNm: '담낭의 악성 신생물',
  },
  {
    sickCd: 'C24',
    sickNm: '기타 및 담도의 상세불명 부분의 악성 신생물',
  },
  {
    sickCd: 'F17',
    sickNm: '담배흡연에 의한 정신 및 행동 장애',
  },
  {
    sickCd: 'K80',
    sickNm: '담석증',
  },
  {
    sickCd: 'K81',
    sickNm: '담낭염',
  },
  {
    sickCd: 'K82',
    sickNm: '담낭의 기타 질환',
  },
  {
    sickCd: 'K83',
    sickNm: '담도의 기타 질환',
  },
  {
    sickCd: 'K87',
    sickNm: '달리 분류된 질환에서의 담낭, 담도 및 췌장의 장애',
  },
  {
    sickCd: 'Q44',
    sickNm: '담낭, 담관 및 간의 선천기형',
  },
  {
    sickCd: 'Z70',
    sickNm: '성적 태도, 행동 및 지향에 관련된 상담',
  },
  {
    sickCd: 'Z71',
    sickNm:
      '달리 분류되지 않은 기타 상담 및 의학적 권고를 위해 보건서비스와 접하고 있는 사람',
  },
];

const SearchBoard = () => {
  return (
    <S.Wrapper>
      <SearchList title="추천 검색어" list={list} />
    </S.Wrapper>
  );
};

export default SearchBoard;
