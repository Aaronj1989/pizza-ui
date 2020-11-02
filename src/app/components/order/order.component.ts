import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Item } from 'src/app/models/item';
@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

	total: number;
	subtotal:number;
	items;
    tax: number;
    quantities= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		
		this.items = this.cartService.getItems();
		 this.updateTotal();
	
	}
    

	//replace the old item totalPrice with updated totalPrice in order subtotal.
	updateItemQuantity(quantity:any,item:any){
		let oldPrice = item.totalPrice;
		item.quantity = parseInt(quantity);
		let newPrice = item.basePrice * item.quantity;
		item.totalPrice = newPrice;
		this.cartService.updateTotal(oldPrice,newPrice);
        this.cartService.updateItemsQuantity();
		this.updateTotal();
	}
	
    updateTotal(){
		this.subtotal = this.cartService.getTotal(); 
		this.tax = this.subtotal * 0.08;
		this.total = Number((this.subtotal + this.tax).toFixed(2)); 
}

    removeItem(item:any){
	this.cartService.removeItem(item);
    this.updateTotal();
}

 public getCartService(){
	return this.cartService;
}

}
