import { Component, OnInit, Input } from '@angular/core';
import { Promotional } from 'src/app/service/promotional.service';

@Component({
  selector: 'promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

 @Input()promoObj: Promotional;

 constructor(){
 
 }

  ngOnInit(): void {
  }

}
