import { SearchType } from 'types/types';

export default class CacheService {
  static setData = (query: string, words: SearchType[]) => {
    const stringifyWord = JSON.stringify(words);
    sessionStorage.setItem(query, stringifyWord);
  };

  static getData = (query: string) => {
    const data = sessionStorage.getItem(query);
    const parsedData: SearchType[] = JSON.parse(data || JSON.stringify([]));
    return parsedData;
  };
}
