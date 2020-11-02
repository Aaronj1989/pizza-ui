import { TestBed } from '@angular/core/testing';

import { DrinkService, } from './drink.service';
import {HttpClientTestingModule ,HttpTestingController} from'@angular/common/http/testing';
import {drinks} from 'src/app/service/food-mock.service';
describe('DrinkService', () => {
 
  const baseUrl = 'http://localhost/8080/drinks';
  let service,http;

  beforeEach(() => {
    TestBed.configureTestingModule({
	providers: [DrinkService],
	imports: [HttpClientTestingModule]
});

    service = TestBed.inject(DrinkService);
    http = TestBed.inject(HttpTestingController);
  });

 afterEach(()=>{
	http.verify();
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   
  it('should return Obseravble<any>', ()=>{
	
	const mockDrinks = [{"id":1,"name":"Aquafina","size":"20 oz","price":1.99},
								   {"id":2,"name":"Sweet tea","size":"20 oz","price":1.99}];
					
	service.findAll().subscribe(drinks =>{
		expect(drinks.length).toBe(2);
		expect(drinks).toEqual(mockDrinks);
	});
	
	const req = http.expectOne('http://localhost:8080/drinks');
	 expect(req.request.method).toBe("GET");
	   req.flush(mockDrinks);				
})

  
});
