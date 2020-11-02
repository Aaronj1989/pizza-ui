import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import {Item } from '../../models/item';
@Component({
	selector: 'app-drink',
	templateUrl: './drink.component.html',
	styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

	@Input() drink: any;
	@Input() drinks: any;
	price: number;
	basePrice: number;
	drinkImg: string;
	quantity = 1;
	description: string;
	constructor(private cartService: CartService) { }

	ngOnInit(): void {

		this.setImg();
		
	
		this.basePrice = this.drink.price;
		this.price = this.drink.price;
	}

	updateQuantity(option: string) {
        
		this.quantity = parseInt(option);
		this.price = this.basePrice * this.quantity;
		
	}

	onChange(option: string) {
       
		this.drink = this.drinks.find(element => element.size === option && element.name === this.drink.name);
		
		this.basePrice = this.drink.price;
		this.price = this.basePrice * this.quantity;
	}

	addToOrder() {
		this.description = this.drink.size + ' ' + this.drink.name;
		this.cartService.addToCart(new Item(this.drink.name,this.price,this.basePrice,this.description,this.quantity,this.drinkImg));
	}

	setImg() {
		switch (this.drink.name) {
			case 'Aquafina':
				this.drinkImg = '/assets/img/logo/aquafina logo.jpg';
				break;
			case 'Sweet tea':
				this.drinkImg = '/assets/img/logo/sweet tea logo.jpg';
				break;
			case 'Root Beer':
				this.drinkImg = '/assets/img/logo/Root beer logo.png';
				break;
			case 'Pepsi':
				this.drinkImg = '/assets/img/logo/pepsi logo.jpg';
				break;
			case 'Baja Blast':
				this.drinkImg = '/assets/img/logo/baja blast logo.png';

		}
	}
	

}
