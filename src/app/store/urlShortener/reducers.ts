import { Action, createReducer, on } from '@ngrx/store';
import { getUrlShortenerState, setUrlShortenerState } from './actions';

import { initialState } from './initialState';

const _urlReducer = createReducer(
  initialState,
  on(getUrlShortenerState, (state) => {
    return {
      ...state,
    };
  }),
  on(setUrlShortenerState, (state, action) => {
    return {
      ...state,
      urlState: [...state.urlState, action.urlShortener],
    };
  })
);

export function urlReducer(state: any, action: Action) {
  return _urlReducer(state, action);
}
