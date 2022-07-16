import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphySearchState } from './api/giphy-search.state';
import { GiphyService } from './api/giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  state$: Observable<GiphySearchState>;

  constructor(private giphyService: GiphyService){}

  ngOnInit() {
    this.state$ = this.giphyService.state$;
  }

  onClick() {
    this.giphyService.search('ultra', 9, 0);
  }

}
