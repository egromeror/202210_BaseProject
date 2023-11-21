import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bookdetail } from './book-detail/bookdetail';

@Injectable({
  providedIn: 'root'
})
export class BookService {

private apiUrl = environment.baseUrl + '/books';

getBooks(): Observable<Bookdetail[]> {
  return this.http.get<Bookdetail[]>(this.apiUrl);
}

constructor(private http: HttpClient) { }

}
