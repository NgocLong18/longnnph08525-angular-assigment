import { Injectable } from "@angular/core";
import { Jumbotron } from "../model/Jumbotron";
import { HttpClient } from "@angular/common/http";
import { Observable, from} from "rxjs";


@Injectable()
export class JumbotronService {
  api="https://5e7c3d27a917d7001668300e.mockapi.io/product/jumbotron"

  constructor(
    private http: HttpClient
  ) { }
  getJumbotron(): Observable<Jumbotron[]>{
    return this.http.get<Jumbotron[]>(this.api);
  }

  getJumbotrons(id): Observable<Jumbotron>{
    return this.http.get<Jumbotron>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }

  updateJumbotron(jumbotron){
     return this.http.put<Jumbotron>(`${this.api}/${jumbotron.id}`, jumbotron);
  }

}
