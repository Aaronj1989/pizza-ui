import { Injectable } from '@angular/core';

export interface Promotional {
  img: string;
  title: string;
  description: string;
  urlRoute: string;
}
const promotionals: Promotional[] = [
  {img: '../../assets/img/promo/pizza promo.jpg',
  title: "New $5 take tasty deal",
  description: "Large 1 topping pizza for 5 dollars",
  urlRoute: "yahoo.com"
  },
  {img: '../../assets/img/promo/pizza and drink promo finished.jpg',
  title: "Free 2 liter",
  description: "Free 2 liter purchase with purchace of $20 or more!",
   urlRoute: "yahoo.com"
  },
  {img: '../../assets/img/promo/flavored wings promo.jpg',
  title: "Flavor town wings",
  description: "New flavored wings hosted by flavor town",
   urlRoute: "https://yahoo.com"
  }
]
@Injectable({
  providedIn: 'root'
})
export class PromotionalService {

  constructor() { }

 getPromotions (){
   return promotionals;
 }
 
}



