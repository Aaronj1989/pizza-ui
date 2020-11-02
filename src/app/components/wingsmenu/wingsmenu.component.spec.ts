import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';

import { WingsmenuComponent } from './wingsmenu.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
describe('WingsmenuComponent', () => {
  let component: WingsmenuComponent;
  let fixture: ComponentFixture<WingsmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WingsmenuComponent ],
imports:[BrowserModule, HttpClientModule,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WingsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
