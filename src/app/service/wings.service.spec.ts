import { TestBed } from '@angular/core/testing';

import { WingsService } from './wings.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
describe('WingsService', () => {
  let service: WingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[HttpClientModule, HttpClient],
                                   imports:[BrowserModule, HttpClientModule,]});
    service = TestBed.inject(WingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
