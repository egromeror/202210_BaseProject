import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Book } from './book'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

private apiUrl = environment.baseUrl + '/books';

getBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(this.apiUrl);
}

constructor(private http: HttpClient) { }

}
