import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Bookdetail } from '../book-detail/bookdetail';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<Bookdetail> = [];
  selected: Boolean = false;
  selectedBook!: Bookdetail;
  constructor(private bookService: BookService) { }

  getBooks(): void{
    this.bookService.getBooks().subscribe(
      (books) => this.books = books
    );
  }

  onSelected(book: Bookdetail): void {
    this.selected = true;
    this.selectedBook = book;
  }

  ngOnInit() {
    this.getBooks();
  }

}
