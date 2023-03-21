import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UrlshortenerService {
  baseUrl = 'https://api.shrtco.de/v2';
  constructor(private httpClient: HttpClient) {}

  public getShortenedLink(linkToShorten: string) {
    const requestUrl = `${this.baseUrl}/shorten?url=${linkToShorten}`;
    return this.httpClient.get<any>(requestUrl);
  }
}
