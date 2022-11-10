import { useSearchParams } from 'react-router-dom';

const useQueryString = () => {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  return query;
};

export { useQueryString };
