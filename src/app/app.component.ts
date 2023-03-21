import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlShortenerEntity } from './entity/urlShortener.entity';
import { UrlshortenerService } from './services/urlshortener.service';
import { ToastrService } from 'ngx-toastr';

import { GeneralUtil } from './utils/general-utils';
import { Store } from '@ngrx/store';
import { AppState } from './store/appState';
import { setUrlShortenerState } from './store/urlShortener/actions';
import { getUrlList } from './store/urlShortener/url.selectors';
import { Subscription } from 'rxjs';

export interface Iurlshortener {
  code: string;
  short_link: string;
  full_short_link: string;
  full_share_link: string;
  original_link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cypress-urlshortener';
  loading = false;
  link = '';
  shortenLink: Iurlshortener[] = [];
  urlSubscription: Subscription | undefined;

  constructor(
    private _urlShortener: UrlshortenerService,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    // this.setUrl({
    //   code: 'cornel',
    //   short_link: 'prime',
    //   full_short_link: 'cornelPrime',
    //   full_share_link: 'maze',
    //   original_link: 'cornelprime',
    // });
    this.urlSubscription = this.store.select(getUrlList).subscribe((data) => {
      this.shortenLink = data.urlState;
    });
  }
  getShortLink() {
    this.loading = true;
    this._urlShortener.getShortenedLink(this.link).subscribe({
      next: (data) => {
        this.loading = false;
        this.link = '';
        const newLink = new UrlShortenerEntity();
        newLink.mapToUrlShortenerEntity(data?.result);
        this.setUrl(newLink);
        this.loading = false;
      },
      error: (error) => {
        this.errorHandler(error);
        this.loading = false;
      },
    });
  }

  setUrl(newUrl: any) {
    this.store.dispatch(
      setUrlShortenerState({
        urlShortener: newUrl,
      })
    );
  }
  // Error handling
  public errorHandler(error: HttpErrorResponse) {
    this.toastr.error(GeneralUtil.errorHandler(error));
  }
}
