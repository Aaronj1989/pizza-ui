import { Component, OnInit, OnChanges } from '@angular/core';
import { ToppingService } from '../../service/topping.service';
import {CartService} from 'src/app/service/cart.service';
import {Item}  from 'src/app/models/item';
@Component({
	selector: 'app-pizzabuilder',
	templateUrl: './pizzabuilder.component.html',
	styleUrls: ['./pizzabuilder.component.css']
})
export class PizzabuilderComponent implements OnInit, OnChanges {
	size: string;
	name = 'Custom pizza';
	showSummary = false;
	basePrice: number;
	price: number;
	whole: string;
	left: string;
	right: string;
	toppingStyles: Map<string, string> = new Map();
  
	description: string;
	toppings: Array<any>;
	constructor(toppingService: ToppingService,private cartService: CartService) {
		this.toppings = toppingService.getToppings();
	}

	ngOnInit(): void {
		this.setPizza('large');
	}


	constructOrder() {
		let toppings = Array.from(this.toppingStyles.keys());

		let whole = toppings.filter(element =>
			this.toppingStyles.get(element) === 'whole').join(', ');
		this.whole = whole.length > 0 ? "WHOLE: " + whole + '</br>': "";

		let left = toppings.filter(element =>
			this.toppingStyles.get(element) === 'left').join(', ');
		this.left = left.length > 0 ? "LEFT: " + left + '</br>': "";

		let right = toppings.filter(element =>
			this.toppingStyles.get(element) === 'right').join(', ');

		this.right = right.length > 0 ? "RIGHT: " + right  : "";

		if (left.length === 0 && right.length === 0) {
			this.whole = whole.replace("WHOLE:", "");

		}
        
		this.description = this.size+ '</br>' +this.whole +  this.left + this.right;
		         
		this.viewSummary(true);

	}
   
	setPizza(option: string) {
		this.basePrice = option === 'large' ? 13.99 : 7.99;
		this.size = option;
		this.updatePrice();
	}
	
	updatePrice() {
	
		this.price = this.basePrice + (1.25 * this.toppingStyles.size);
	}
	
	
	activeTopping(option): boolean {
		
		return this.toppingStyles.has(option);
	}
	
	viewSummary(show: boolean) {
		this.showSummary = show;
		this.ngOnChanges();
	}
	ngOnChanges() {

	}
	getToppingStyle(option:string) {
		let style = this.toppingStyles.get(option);
		let toppingStyle;
		switch (style){
		case 'left':
		  toppingStyle ="inset(0% 50% 0% 0%)";
		break;
		case 'right':
		   toppingStyle ="inset(0% 0% 0% 50%)";
        break;
       default:
             toppingStyle ="inset(0% 0% 0% 0%)";
        
	}
	   return toppingStyle;

}
 addToOrder(){
	this.cartService.addToCart(new Item(this.name,this.price,this.price,this.description,1,"/assets/img/pizza menu/create your own pizza.png"));
}
}
