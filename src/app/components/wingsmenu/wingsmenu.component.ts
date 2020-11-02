import { Component, OnInit } from '@angular/core';
import {WingsService} from '../../service/wings.service';
@Component({
  selector: 'app-wingsmenu',
  templateUrl: './wingsmenu.component.html',
  styleUrls: ['./wingsmenu.component.css']
})
export class WingsmenuComponent implements OnInit {

wings:Array<any>;

  constructor(private wingsService: WingsService) { 

}

  ngOnInit(): void {
     this.wingsService.findAll().subscribe(data => {
	this.wings = data;


});
	
  }

}
