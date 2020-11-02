import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DrinkService {
	drinksUrl: string;
	drinks: any;
	constructor(private http: HttpClient) {
		this.drinksUrl = 'http://localhost:8080/drinks';
	}

	public findAll(): Observable<any> {
		return this.http.get(this.drinksUrl);
	}
}
