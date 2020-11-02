import { Component, OnInit } from '@angular/core';
import { DrinkService} from '../../service/drink.service';

@Component({
  selector: 'app-drinkmenu',
  templateUrl: './drinkmenu.component.html',
  styleUrls: ['./drinkmenu.component.css']
})
export class DrinkmenuComponent implements OnInit {

 	drinks: Array<any>;
    drinkCategories: Array<any>;

	constructor(private drinksService: DrinkService) {
		
	}
	ngOnInit(): void {
      this.drinksService.findAll().subscribe(data =>{
	    this.drinks = data;
        this.drinkCategories = this.drinks.filter(item => item.size === '20 oz');
                    
        });

	}
	
}
