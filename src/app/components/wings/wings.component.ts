import { Component, OnInit, Input } from '@angular/core';
import {CartService } from 'src/app/service/cart.service'; 
import {NgForm }  from'@angular/forms';
import {Item}  from 'src/app/models/item';
@Component({
	selector: 'app-wings',
	templateUrl: './wings.component.html',
	styleUrls: ['./wings.component.css']
})
export class WingsComponent implements OnInit {
	@Input() wings: Array<any> = new Array<any>();
    wingsSet: any;
	price: number;
    name = 'Traditional wings';
	wingsImg: string;
	flavor: string;
	basePrice: number;
	
	constructor(private cartService: CartService) { }

	ngOnInit(): void {
	    
	    this.wingsSet = this.wings[0];
        this.flavor = "default";
        this.wingsSet.flavor = this.flavor;
        this.price = this.wingsSet.price;
	    this.basePrice = this.price;
		this.wingsImg = '/assets/img/promo/menu cat wings.jpg';
	}


	onChange(option:any) {

     this.wingsSet=this.wings.find(element => element.pieces === parseInt(option));
     this.price = this.wingsSet.price;
     this.basePrice = this.price;
     this.wingsSet.flavor = this.flavor;
       
	}
	chooseFlavor(flavor:any){
		this.flavor = flavor; 
	}

	addToOrder(form: NgForm ) {
		this.name += ' ' + this.wingsSet.flavor;
		this.cartService.addToCart(new Item(this.name,this.wingsSet.price,this.basePrice,'',1,this.wingsImg ));
   
	}
}
