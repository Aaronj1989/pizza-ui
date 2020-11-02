import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { CartService} from '../../service/cart.service';
import { Item} from'../../models/item';

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PizzaComponent implements OnInit {
  @Input() pizzas: Array<any> = new Array<any>();

  @Input() pizza: any;
  pizzaImg: string;
  price: number;
  basePrice: number;
  quantity = 1;
  description: string;
  toppings: any;
  @Output() newItemEvent = new EventEmitter<any>();


  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    
    this.basePrice = this.pizza.price;
    this.price = this.pizza.price;
    this.toppings = this.pizza.toppings.map(topping => topping.name);
    this.toppings = this.toppings.toString().replace(",",", ");
    this.getImage();
    

  }

  onChange(option: string) {
    this.updatePizza(this.pizza.name, option.toLowerCase());
  }

 updateQuantity(option: string){
	  
	  this.quantity = parseInt(option);
      this.price = this.basePrice*this.quantity;
}

  updatePizza(pizzaName: string, pizzaSize: string) {

    this.pizza = this.pizzas.find(element => element.name === pizzaName && element.size === pizzaSize);
    this.basePrice = this.pizza.price;
    this.price = this.basePrice * this.quantity;
  }

  addToOrder(pizza){
   this.description =  this.pizza.size + ' ' + pizza.name + ' pizza </br> Toppings: '+ this.toppings; 
   let item = new Item(this.pizza.name,this.price,this.basePrice, this.description, this.quantity,this.pizzaImg);

    this.cartService.addToCart(item);
  }

  getImage() {
    let name = this.pizza.name;
    switch (name) {
      case 'pepperoni':
        this.pizzaImg = '/assets/img/pizza menu/pepperoni_pizza.jpg';
        break;

      case 'cheese':
        this.pizzaImg = '/assets/img/pizza menu/cheeze_pizza.jpg';
        break;

      case 'meatlovers':
        this.pizzaImg = '/assets/img/pizza menu/meat_lovers_pizza.jpg';
        break;

      case 'hawaiian':
        this.pizzaImg = '/assets/img/pizza menu/hawaiian_pizza.jpg';
        break;
    }
  }
}







