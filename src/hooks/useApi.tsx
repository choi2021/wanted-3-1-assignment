import { useSearchedDataDispatch } from 'hooks/useSearch';
import HTTPError from 'network/httpError';
import CacheService from 'service/CacheService';
import { useQueryString } from './useQueryString';
import { useSearchService } from './useSearch';

const useApi = () => {
  const dispatch = useSearchedDataDispatch();
  const searchService = useSearchService();
  const query = useQueryString();
  async function getResponse() {
    dispatch({ type: 'SET_LOADING', isLoading: true });
    try {
      const response = await searchService?.getSearch(query);
      if (response) {
        dispatch({ type: 'SET_DATA', data: response });
        CacheService.setData(query, response);
      }
    } catch (e) {
      if (e instanceof HTTPError) {
        dispatch({ type: 'SET_ERROR', error: e.errorMessage });
      }
      console.error(e);
    } finally {
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }
  }
  return getResponse;
};

export { useApi };
