import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Item} from '../../models/item';

@Component({
	selector: 'app-side',
	templateUrl: './side.component.html',
	styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

	@Input() side: any;
	price: number;
	basePrice: number;
	sideImg: string;
	quantity=1;
	description: string;
	constructor(private cartService: CartService) { }

	ngOnInit(): void {
		this.price = this.side.price;
		this.basePrice = this.price;
		this.setImg();
	}

	setImg() {

		switch (this.side.name) {
			case 'Salad':
				this.sideImg = '/assets/img/promo/salad menu item.jpg';
				this.description="Crisp chopped romaine, baby spinach and baby kale with vegies. Comes with Newman's Own Southwest dressing.";
				break;
			case 'Breadsticks':
				this.sideImg = '/assets/img/promo/bread sticks menu cat.jpg';
                this.description ='8 individual breadsticks with marinara dipping sauce ';
		}
	}

	updateQuantity(option: string) {
		
		this.price = this.basePrice * parseInt(option);
	}

	addToOrder() {
		this.cartService.addToCart(new Item(this.side.name, this.price,this.basePrice, this.description,this.quantity,this.sideImg));

	}

}
