import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzabuilderComponent } from './pizzabuilder.component';

describe('PizzabuilderComponent', () => {
  let component: PizzabuilderComponent;
  let fixture: ComponentFixture<PizzabuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzabuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzabuilderComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should construct order corectly by topping and style',()=>{
	
	component.toppingStyles = new Map([['pepperoni','left'],
									   ['italian sausage','left'],
									   ['pineapple','right']]);
    component.constructOrder();
    expect(component.description).toEqual( 'large</br>LEFT: pepperoni, italian sausage</br>RIGHT: pineapple');
						 
});

 it('should set pizza price according to size',()=>{
	component.setPizza('medium');
	expect(component.basePrice).toEqual(7.99);
})
});
