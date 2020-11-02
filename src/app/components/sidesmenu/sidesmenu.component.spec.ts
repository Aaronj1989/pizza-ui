import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import { SidesmenuComponent } from './sidesmenu.component';

describe('SidesmenuComponent', () => {
  let component: SidesmenuComponent;
  let fixture: ComponentFixture<SidesmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	 imports:[BrowserModule,
   HttpClientModule],
      declarations: [ SidesmenuComponent ],
 providers:[HttpClient,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
