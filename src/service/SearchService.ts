import { AxiosError, AxiosInstance } from 'axios';
import { SearchResponse, SearchService } from 'types/types';
import HTTPError from '../network/httpError';

export default class SearchServiceImpl implements SearchService {
  constructor(private httpClient: AxiosInstance) {}

  async getSearch(keyword: string) {
    try {
      const { data } = await this.httpClient.get<SearchResponse>(
        `?sickNm_like=${keyword}`
      );
      console.info('calling api');
      return await data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        if (response) {
          throw new HTTPError(response?.status, response?.statusText);
        }
      }
      throw new Error('Server Error');
    }
  }
}
