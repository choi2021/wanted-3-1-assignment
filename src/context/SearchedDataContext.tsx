import { createContext, useReducer, Dispatch } from 'react';
import { SearchType } from 'types/types';

type State = {
  isLoading: boolean;
  data: SearchType[];
  error: string;
};

type SearchDistpatch = Dispatch<Action>;

const ACTION_CONST = {
  SET_DATA: 'SET_DATA',
  SET_IS_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
} as const;

type Action =
  | { type: 'SET_DATA'; data: SearchType[] }
  | { type: 'SET_LOADING'; isLoading: boolean }
  | { type: 'SET_ERROR'; error: string };

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

export const SearchedDataStateContext = createContext<State | null>(
  initialState
);
export const SearchedDataDispatchContext =
  createContext<SearchDistpatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_CONST.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case ACTION_CONST.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case ACTION_CONST.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error('Unknown Action');
  }
};

export const SearchedDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SearchedDataStateContext.Provider value={state}>
      <SearchedDataDispatchContext.Provider value={dispatch}>
        {children}
      </SearchedDataDispatchContext.Provider>
    </SearchedDataStateContext.Provider>
  );
};
