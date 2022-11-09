export interface SearchService {
  getSearch: (keyword: string) => SearchResponse;
}

export type SearchType = {
  sickCd: string;
  sickNm: string;
};

export type SearchResponse = Promise<SearchType[]>;
