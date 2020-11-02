import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionComponent } from './promotion.component';

describe('PromotionComponent', () => {
  let component: PromotionComponent;
  let fixture: ComponentFixture<PromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionComponent);
    component = fixture.componentInstance;
    component.promoObj = {img: '../../assets/img/promo/pizza promo.jpg',
  title: "New $5 take tasty deal",
  description: "Large 1 topping pizza for 5 dollars",
  urlRoute: "yahoo.com"
  };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
