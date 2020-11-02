import { Component, OnInit } from '@angular/core';
import { SideService } from '../../service/side.service';
@Component({
	selector: 'app-sidesmenu',
	templateUrl: './sidesmenu.component.html',
	styleUrls: ['./sidesmenu.component.css']
})
export class SidesmenuComponent implements OnInit {

	sides: Array<any>;
	constructor(private sidesService: SideService) {
		
	}
	ngOnInit(): void {
   this.sidesService.findAll().subscribe(data => {
	this.sides = data;
});
	}


}
