import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DrinkService} from 'src/app/service/drink.service';
import { DrinkmenuComponent } from './drinkmenu.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DrinkmenuComponent', () => {
  let component: DrinkmenuComponent;
  let fixture: ComponentFixture<DrinkmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkmenuComponent ], imports:[HttpClientTestingModule],
        providers:[DrinkService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
