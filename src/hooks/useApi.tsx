import { useSearchedDataDispatch } from 'hooks/useSearch';
import HTTPError from 'network/httpError';
import { useSearchParams } from 'react-router-dom';
import { useSearchService } from './useSearch';

const useApi = () => {
  const dispatch = useSearchedDataDispatch();
  const searchService = useSearchService();
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  async function getResponse() {
    dispatch({ type: 'SET_LOADING', isLoading: true });
    try {
      const response = await searchService?.getSearch(query);
      if (response) {
        dispatch({ type: 'SET_DATA', data: response });
        sessionStorage.setItem(query, JSON.stringify(response));
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
