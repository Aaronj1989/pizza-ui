import { TestBed } from '@angular/core/testing';

import { SideService } from './side.service';
import {HttpClientTestingModule, HttpTestingController} from'@angular/common/http/testing';
describe('SideService', () => {
  let service: SideService;
  const baseUrl = 'http://localhost/8080/Sides';
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
	providers: [SideService],
	imports: [HttpClientTestingModule]
});

    service = TestBed.inject(SideService);
    http = TestBed.inject(HttpTestingController);
  });

 afterEach(()=>{
	http.verify();
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   
  it('should return Obseravble<any>', ()=>{
	
	const mockSides = [{"id":1,"name":"Breadsticks","price":4.99},{"id":2,"name":"Salad","price":3.5}];
					
	service.findAll().subscribe(sides =>{
		expect(sides.length).toBe(2);
		expect(sides).toEqual(mockSides);
	});
	
	const req = http.expectOne('http://localhost:8080/sides');
	 expect(req.request.method).toBe("GET");
	   req.flush(mockSides);				
})

});
