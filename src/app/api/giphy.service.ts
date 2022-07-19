import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, of, Observable } from 'rxjs';
import { GiphyAPIResponse } from '../models/giphy-api-models';
import { GiphySearchState } from '../models/giphy-search.state';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  state$: BehaviorSubject<GiphySearchState> = new BehaviorSubject<GiphySearchState>({ loading: false });

  private readonly API_KEY = 'j3M2zZ9CMScmmqTm8rOZQv0YtWwjQHPN';
  private readonly API_URL = 'https://api.giphy.com/v1/gifs';
  private readonly API_STATUS_OK = 200;

  constructor(private httpClient: HttpClient) {}

  search(q: string, limit: number, page: number): void {
    this.state$.next({ loading: true });
    const params: HttpParams = new HttpParams({ fromObject: { api_key: this.API_KEY, q, limit, offset: (page-1)*limit } });
    this.httpClient.get<GiphyAPIResponse>(`${this.API_URL}/search`, { params })
      .pipe(catchError((error: HttpErrorResponse) => this.onSearchError(error)))
      .subscribe(response => this.onSearchComplete(response))
  }

  private onSearchError(error: HttpErrorResponse): Observable<GiphyAPIResponse> {
    const response: GiphyAPIResponse = {
      data: [],
      meta: { status: error.status, msg: error.statusText, response_id: '' },
      pagination: { count: 0, offset: 0, total_count: 0 }
    };
    return of(response);
  }

  private onSearchComplete(response: GiphyAPIResponse): void {
    let state: GiphySearchState = { loading: false };
    response.meta.status === this.API_STATUS_OK ? state.response = response : state.error = response.meta.msg;
    this.state$.next(state);
  }
}
