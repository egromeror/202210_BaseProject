import { Component, Input, OnInit } from '@angular/core';
import { Bookdetail } from '../book-detail/bookdetail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail!: Bookdetail;

  constructor() { }

  ngOnInit() {
  }

}
