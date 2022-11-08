import { useContext } from 'react';
import {
  SearchedDataDispatchContext,
  SearchedDataStateContext,
} from '../context/SearchedDataContext';

export function useSearchedDataState() {
  const state = useContext(SearchedDataStateContext);
  if (!state) throw new Error('Cannot find SearchedDataProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useSearchedDataDispatch() {
  const dispatch = useContext(SearchedDataDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
