import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzamenuComponent } from './pizzamenu.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {RouterTestingModule} from '@angular/router/testing';
import {routes} from 'src/app/app.routes';

describe('PizzamenuComponent', () => {
  let component: PizzamenuComponent;
  let fixture: ComponentFixture<PizzamenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	imports: [
   BrowserModule,
   HttpClientModule,
   RouterTestingModule.withRoutes(routes)
 ],
      declarations: [ PizzamenuComponent ],
      providers:[HttpClient,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
