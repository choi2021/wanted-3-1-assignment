import { AxiosError, AxiosInstance } from 'axios';
import { SearchService } from 'types/types';
import HTTPError from '../network/httpError';

export default class SearchServiceImpl implements SearchService {
  constructor(private httpClient: AxiosInstance) {}

  async getSearch(keyword: string) {
    try {
      const response = await this.httpClient.get(`?q=${keyword}`);
      console.info('calling api');
      return response.data;
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
