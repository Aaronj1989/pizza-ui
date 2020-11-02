import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { CartService} from 'src/app/service/cart.service';
import {Item } from 'src/app/models/item';
describe('OrderComponent', () => {
  let component: OrderComponent;
  let cartService: CartService;
  let fixture: ComponentFixture<OrderComponent>;
  let item1,item2,item3;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      providers:[CartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    cartService = component.getCartService();
 	item1 = new Item('medium meatlovers pizza', 15.00,15.00, 'ham,pepperoni,sausage, bacon',1,"");
	item2 = new Item('1 liter drink',2.99,2.99,'1 liter pepsi',1,"");
	item3 = new Item('12 Traditional wings Honey BBQ',14.99,14.99,"",1,"");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should display correct subtotal of the order after adding items',()=>{
	
   cartService.addToCart(item1);
   component.updateTotal();
   expect(component.total).toEqual(16.20);
   cartService.addToCart(item2);
   component.updateTotal();
   expect(component.total).toEqual(19.43);
   cartService.addToCart(item3);
   component.updateTotal();
   expect(component.total).toEqual(35.62);
});

 it('should display correct total of order after removing items',()=>{
	cartService.addToCart(item1);
	cartService.addToCart(item2);
	cartService.addToCart(item3);
	component.removeItem(item2);
	expect(Number(component.total.toFixed(2))).toEqual(32.39);
	
	
})
});
