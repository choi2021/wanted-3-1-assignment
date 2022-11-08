export interface SearchService {
  getSearch: (keyword: string) => Promise<SearchType>;
}

export type SearchType = {
  sickCd: string;
  sickNm: string;
};
