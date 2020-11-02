import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class SideService {
	sidesUrl: string;
	sides: any;
	constructor(private http: HttpClient) {
		this.sidesUrl = 'http://localhost:8080/sides';
	}

	public findAll(): Observable<any> {
		return this.http.get(this.sidesUrl);
	}
}
