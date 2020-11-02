import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToppingService } from '../../service/topping.service';
@Component({
	selector: 'app-topping',
	templateUrl: './topping.component.html',
	styleUrls: ['./topping.component.css']
})
export class ToppingComponent implements OnInit {
	@Input() toppingStyles: Map<string,string>;
	@Input() topping: any;
	side: string;
	@Output() selectTopping = new EventEmitter<any>();

	leftActivated = this.toppingService.inactiveLeft();
	rightActivated = this.toppingService.inactiveRight();
	wholeActivated = this.toppingService.inactiveWhole();
	constructor(private toppingService: ToppingService) { }

	setToppingStyle(option: string) {
		
		this.toppingStyles.set(this.topping.name ,option);
		this.wholeActivated = option === 'whole' ? this.toppingService.activeWhole() : this.toppingService.inactiveWhole();
		this.leftActivated = option === 'left' ? this.toppingService.activeLeft() : this.toppingService.inactiveLeft();
		this.rightActivated = option === 'right' ? this.toppingService.activeRight() : this.toppingService.inactiveRight();

		if (option === 'none') {
			this.removeTopping();
			this.selectTopping.emit();
			return;
		}
		
		this.selectTopping.emit();
	}

	removeTopping() {
		
		this.toppingStyles.delete(this.topping.name);

	}


	ngOnInit(): void {

		if (this.toppingStyles!== undefined && this.toppingStyles.size > 0) {
			let style = this.toppingStyles.get(this.topping.name);

			if (style !== undefined) {
				this.setToppingStyle(style);
			}
		}
	}

}
