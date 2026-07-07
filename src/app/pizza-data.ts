import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './pizza-list/Pizza';

const URL= 'https://6a4d8895e1cf82a4a17e689f.mockapi.io/api/v1/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaData {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(URL);
  }
}
