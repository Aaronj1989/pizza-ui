import { Component, OnInit, Input } from '@angular/core';
import { MenucategoryService, Category} from '../../service/menucategory.service'
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuCategory: Category;
constructor() {
 
  }

  ngOnInit(): void {
  }

}
