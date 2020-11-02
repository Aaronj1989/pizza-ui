import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
private pizzaUrl: string;

constructor(private http: HttpClient) {
        this.pizzaUrl = 'http://localhost:8080/pizzas';
  }

  public findAll(): Observable<any>{
    return this.http.get(this.pizzaUrl);
  }
}
