import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgForm }  from'@angular/forms';
import { WingsComponent } from './wings.component';
import {WingsService} from 'src/app/service/wings.service';

describe('WingsComponent', () => {
  let component: WingsComponent;
  let fixture: ComponentFixture<WingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WingsComponent,NgForm ],
      providers:[{provide:WingsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WingsComponent);
    component = fixture.componentInstance;
    component.wings = [{id:1,flavor: 'default',pieces:6,price:7.99}, 
								  {id:2,flavor: null ,pieces:12,price:14.99}];
    component.wingsSet = component.wings[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
