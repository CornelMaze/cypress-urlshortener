import { Iurlshortener } from 'src/app/app.component';

export interface UrlShortenerState {
  urlState: Iurlshortener[];
}

export const initialState: UrlShortenerState = {
  urlState: [],
};
