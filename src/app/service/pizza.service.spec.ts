import { TestBed } from '@angular/core/testing';

import { PizzaService } from './pizza.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';

describe('PizzaService', () => {
  const baseUrl = 'http://localhost/8080/Pizza';
  let service,http;

  beforeEach(() => {
    TestBed.configureTestingModule({
	providers: [PizzaService],
	imports: [HttpClientTestingModule]
});

    service = TestBed.inject(PizzaService);
    http = TestBed.inject(HttpTestingController);
  });

 afterEach(()=>{
	http.verify();
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   
  it('should return Obseravble<any>', ()=>{
	
	const mockPizzas = [{id:1, name:'pepperoni',price:15.99,toppings:[{id:1,name:'pepperoni'}],size:'large'},
                                    {id:2, name:'cheese',price:13.99,toppings:[],size:'large'},];
					
	service.findAll().subscribe(pizzas =>{
		expect(pizzas.length).toBe(2);
		expect(pizzas).toEqual(mockPizzas);
	});
	
	const req = http.expectOne('http://localhost:8080/pizzas');
	 expect(req.request.method).toBe("GET");
	   req.flush(mockPizzas);				
})
});
