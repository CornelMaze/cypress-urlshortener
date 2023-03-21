import { Iurlshortener } from '../app.component';
import { urlReducer } from './urlShortener/reducers';

export interface AppState {
  urlAppState: Iurlshortener;
}

export const appReducer = {
  urlStateReducer: urlReducer,
};
