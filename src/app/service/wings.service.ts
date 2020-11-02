import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class WingsService {

	wingsUrl: string;

	constructor(private http: HttpClient) {
		this.wingsUrl = 'http://localhost:8080/wings';
	}

	public findAll(): Observable<any> {
		return this.http.get(this.wingsUrl);
	}
}
