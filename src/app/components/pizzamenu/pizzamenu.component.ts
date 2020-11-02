import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/service/pizza.service';
import { Router} from '@angular/router';
@Component({
  selector: 'pizza-menu',
  templateUrl: './pizzamenu.component.html',
  styleUrls: ['./pizzamenu.component.css']
})
export class PizzamenuComponent implements OnInit {

  pizzas: Array<any>;
  pizzaCategories: Array<any>;

  constructor(private pizzaService: PizzaService, private router:Router) { }

  ngOnInit(): void {
     this.pizzaService.findAll().subscribe(data => {
          this.pizzas = data;

          this.pizzaCategories = this.pizzas.filter(item => item.size === 'large');
               
        });
  }
 

createYourOwn(){
	this.router.navigate(['/create-pizza']);
}
}
