import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationData } from 'src/app/models/pagination-data';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() data: PaginationData | null;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  get isFirstPage(): boolean {
    return this.data?.activePage === 1;
  }

  get isLastPage(): boolean {
    return this.data?.activePage === this.data?.lastPage;
  }

  onPrev() {
    this.pageChange.emit(this.data!.activePage - 1);
  }

  onNext() {
    this.pageChange.emit(this.data!.activePage + 1);
  }

  onPageClick(value: number) {
    this.pageChange.emit(value);
  }
}
