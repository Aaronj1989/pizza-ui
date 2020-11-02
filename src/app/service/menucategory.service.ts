import { Injectable } from '@angular/core';

export interface Category{
  name: string;
  img: string;
  linkRoute: string;
}
export const categories: Category[] = [
   {name: 'PIZZA',
    img: '../../assets/img/promo/menu cat pizza.jpg',
    linkRoute: 'menu/pizza'},
     
   {name: 'WINGS',
    img: '../../assets/img/promo/menu cat wings.jpg',
    linkRoute: 'menu/wings'},
   {name: 'SIDES',
    img: '../../assets/img/promo/menu cat breadsticks.jpg',
    linkRoute: 'menu/sides'},
   {name: 'DRINKS',
    img: '../../assets/img/promo/menu cat drinks.jpg',
    linkRoute: 'menu/drinks'}
  ];
  
@Injectable({
  providedIn: 'root'
})
export class MenucategoryService {

  constructor() { }

  getMenuCategories(){
     return categories;
  }
}
