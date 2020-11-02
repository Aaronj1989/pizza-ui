import { Component } from '@angular/core';
import {CartService}  from './service/cart.service';
import {BehaviorSubject} from'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pizza-ui';
  headerLogo = '../assets/img/logo/royal pizza logo.png';


cartSubject: BehaviorSubject<any>;

  constructor(cartService: CartService){
	this.cartSubject = cartService.quantityCounter;
}
}
