import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {Item } from 'src/app/models/item';
describe('CartService', () => {
  let service: CartService;

  let item1,item2;
  beforeEach(()=> {
    TestBed.configureTestingModule({providers:[CartService]});
    service = TestBed.get(CartService);

   item1 = new Item('pepperoni pizza',8.99,8.99,'medium pepperoni pizza',1,"");
   item2 = new Item('root beer',2.99,2.99,'1 liter root beer',1,"");
  });

afterEach(()=>{
	service.clearCart();
 });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
it('should add item to cart', () => {
   service.addToCart(item1);
   expect(service.items.length ).toEqual(1);
  });

it('should just update quantity of item if item is already in cart',()=>{
    service.addToCart(item1);
    
    expect(service.items.length).toEqual(1);
    service.addToCart(item1);
    expect(service.items.length).toEqual(1);
    expect(service.items[0].quantity).toEqual(2);
   });

it('should update the total after adding or removing item from cart',()=>{

	service.addToCart(item1);
	service.addToCart(item2);	
	expect(service.getTotal()).toEqual(11.98);
	service.removeItem(item1);
	expect(service.getTotal()).toEqual(2.99);
});
});
