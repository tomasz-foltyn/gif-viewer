import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() list: ListItem[] | null;
  @Input() loading: boolean | null;
  @Input() error: string | null;
}
