import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideComponent } from './side.component';

describe('SideComponent', () => {
  let component: SideComponent;
  let fixture: ComponentFixture<SideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideComponent);
    component = fixture.componentInstance;
    component.side = {"id":1,"name":"Breadsticks","price":4.99};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
