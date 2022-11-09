import { useKeyword } from 'hooks/useSearch';
import { useEffect, useState } from 'react';

const useDebounce = (delay: number) => {
  const { keyword, setKeyword } = useKeyword();
  const [tempKeyword, setTempKeyword] = useState(keyword);
  useEffect(() => {
    const debounce = setTimeout(() => {
      return setKeyword(tempKeyword);
    }, delay);
    return () => clearTimeout(debounce);
  }, [tempKeyword]);
  return { tempKeyword, setTempKeyword };
};

export { useDebounce };
