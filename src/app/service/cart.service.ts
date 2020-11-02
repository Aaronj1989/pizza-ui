import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class CartService {
	items = [];
	total: number = 0;
	itemsQuantity = 0;
	quantityCounter = new BehaviorSubject(this.itemsQuantity);
	constructor() { }

	//adds item to cart if the item is already found in the cart it just updates the quantity and price of the item
	addToCart(item) {

		const element = this.items.find(element => element.description === item.description);
		if (element === undefined) {
			this.items.push(item);
		} else {
			this.itemsQuantity -= element.quantity;
			element.quantity += item.quantity;
			element.totalPrice += item.totalPrice;

		}
		this.itemsQuantity += item.quantity;
		this.getItemsQuantity();
		this.total += item.totalPrice;

	}
  
	removeItem(item: any) {
		
		let index = this.items.findIndex(element => element.name === item.name);
		this.items.splice(index, 1);
		this.itemsQuantity -= item.quantity;
		this.getItemsQuantity();
		this.total -= item.totalPrice;
	}

	updateItemsQuantity() {
		this.itemsQuantity = this.items.map(item => item.quantity).reduce((a, b) => a + b); 
		this.getItemsQuantity();
	}

	getItems() {
		return this.items;
	}

	public getTotal():number {
			return this.total;
	}
	public updateTotal(oldPrice: number, newPrice: number) {
		this.total -= oldPrice;
		this.total += newPrice;
	} 	
	
	clearCart() {
		this.itemsQuantity = 0;
		this.total = 0;
		this.items = [];
		this.getItemsQuantity();
	}
	//counter that reflects the quantity of items in the cart
	getItemsQuantity() {
		this.quantityCounter.next(this.itemsQuantity);
	}
}
