import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    FiltersComponent,
    PaginationComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    FiltersComponent,
    PaginationComponent,
    ListComponent,
  ]
})
export class ComponentsModule { }
