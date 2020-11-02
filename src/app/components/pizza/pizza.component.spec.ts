import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';
import {CurrencyPipe} from'@angular/common';
describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaComponent ],
     providers:[CurrencyPipe]
    })
    .compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    component.pizza = {id:1, name:'pepperoni',price:15.99,toppings:[{id:1,name:'pepperoni'}],size:'large'};
    component.pizzas = [{id:1, name:'pepperoni',price:15.99,toppings:[{id:1,name:'pepperoni'}],size:'large'},
                         {id:2, name:'pepperoni',price:8.99,toppings:[{id:1,name:'pepperoni'}],size:'medium'}]
    component.price = component.pizza.price;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct price according to the quantity ',()=>{
	component.updateQuantity('2');
	expect(component.price).toEqual(31.98);
})

  it('should display the correct pizza according to the size selected ',()=>{
	component.updatePizza('pepperoni','medium');
	expect(component.pizza.price).toEqual(8.99);
    expect(component.pizza.size).toEqual('medium');
})
});
