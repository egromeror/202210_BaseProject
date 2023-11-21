import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  exports: [BookListComponent],
  imports: [
    CommonModule
  ],
  declarations: [BookListComponent,BookDetailComponent]
})
export class BookModule { }
