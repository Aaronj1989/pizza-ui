import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CurrencyPipe } from'@angular/common';
import { DrinkComponent } from './drink.component';

describe('DrinkComponent', () => {
  let component: DrinkComponent;
  let fixture: ComponentFixture<DrinkComponent>;



  beforeEach(async() => {
	 TestBed.configureTestingModule({
      declarations: [ DrinkComponent ],
      providers:[CurrencyPipe]
    })
    fixture = TestBed.createComponent(DrinkComponent);
    component = fixture.componentInstance;
    component.drink = {"id":1,"name":"Aquafina","size":"20 oz","price":1.99};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
