import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit, OnDestroy {

  @Input() value: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  public searchFC: FormControl;
  private subscription: Subscription;

  ngOnInit(): void {
    this.searchFC = new FormControl(this.value);
    this.subscription = this.searchFC.valueChanges
      .pipe(
        startWith(this.value),
        debounceTime(300)
      )
      .subscribe(value => this.search.emit(value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
