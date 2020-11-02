import { Injectable } from '@angular/core';

const toppings = [{name:"Pepperoni", img:"/assets/img/pizza builder/pepperoni topping.jpg"},
                  {name:"Italian sausage", img:"/assets/img/pizza builder/italian sausage topping.jpg"},
          	   	  {name:"Pineapple", img:"/assets/img/pizza builder/pineapple topping.jpg"},
                  {name:"Mushrooms", img:"/assets/img/pizza builder/sliced mushroom tooping.jpg"},
                  {name:"Green Bellpeppers", img:"/assets/img/pizza builder/bell pepper topping.jpg"},
                  {name:"Olives", img:"/assets/img/pizza builder/olive topping.jpg"}]

@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor() { }

public getToppings(){
	return toppings;
}


activeLeft(){
	return '/assets/img/pizza builder/active left.png';
}
activeRight(){
	return '/assets/img/pizza builder/active right.png';
}
activeWhole(){
	return '/assets/img/pizza builder/active whole.png';
}

inactiveLeft(){
	return '/assets/img/pizza builder/inactive left.png';
}
inactiveRight(){
	return '/assets/img/pizza builder/inactive right.png';
}
inactiveWhole(){
	return '/assets/img/pizza builder/inactive whole.png';
}

}
