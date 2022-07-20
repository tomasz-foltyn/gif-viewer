import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, filter, map, Observable} from 'rxjs';
import { GiphyService } from './api/giphy.service';
import { ListItem } from './models/list-item';
import { PaginationData } from './models/pagination-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  searchValue: string = 'cats';
  private readonly ITEMS_PER_PAGE = 9;

  get loading$(): Observable<boolean> {
    return this.giphyService.state$.pipe(map(state => state.loading));
  }

  get error$(): Observable<string> {
    return this.giphyService.state$.pipe(map(state => state.error || ''));
  }

  get list$(): Observable<ListItem[]> {
    return this.giphyService.state$.pipe(
      map(state => state.response?.data || []),
      map(data => data.map(obj => ListItem.create(obj))),
    );
  }

  get isPaginationHidden$(): Observable<boolean> {
    return combineLatest([this.loading$, this.error$, this.giphyService.state$]).pipe(
      map(([loading, error, state]) => loading || !!error || !state.response?.data.length)
    );
  }

  get paginationData$(): Observable<PaginationData> {
    return this.giphyService.state$.pipe(
      filter(state => !!state.response?.pagination),
      map(state => state.response!.pagination),
      map(p => PaginationData.create(this.ITEMS_PER_PAGE, p.offset, p.total_count)),
    );
  }

  constructor(private giphyService: GiphyService){}

  onSearch(value: string): void {
    this.searchValue = value;
    this.giphyService.search(this.searchValue, this.ITEMS_PER_PAGE, 1);
  }

  onPageChange(page: number): void {
    this.giphyService.search(this.searchValue, this.ITEMS_PER_PAGE, page);
  }
}
