import { Injectable } from '@angular/core';
import { Categories } from '../model/Categories'
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable()
export class CategoriesService {
  api = "https://5e7c3d27a917d7001668300e.mockapi.io/product/CourserCategory"
  constructor(
    private http: HttpClient
  ) { }
  getCourserCategory(): Observable<Categories[]>{
    return this.http.get<Categories[]>(this.api);
  }
}