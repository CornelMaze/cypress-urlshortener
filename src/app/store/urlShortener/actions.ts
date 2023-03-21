import { createAction, props } from '@ngrx/store';
import { Iurlshortener } from 'src/app/app.component';
export const getUrlShortenerState = createAction('getUrlShortenerState');
export const setUrlShortenerState = createAction(
  'setUrlShortenerState',
  props<{ urlShortener: Iurlshortener }>()
);
