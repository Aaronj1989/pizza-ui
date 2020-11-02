import { Component, OnInit } from '@angular/core';

import { MenucategoryService, Category } from 'src/app/service/menucategory.service';
import { PromotionalService, Promotional } from 'src/app/service/promotional.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 promos: Promotional[];
 categories: Category[];

 constructor(categoryService: MenucategoryService, promotionService: PromotionalService) {
      this.promos = promotionService.getPromotions();
      this.categories = categoryService.getMenuCategories();
  }
  ngOnInit(): void {
  }

}
