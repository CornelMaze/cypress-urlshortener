import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UrlShortenerState } from './initialState';

const getUrlShortenerState =
  createFeatureSelector<UrlShortenerState>('urlStateReducer');

export const getUrlList = createSelector(getUrlShortenerState, (data) => {
  return data;
});
