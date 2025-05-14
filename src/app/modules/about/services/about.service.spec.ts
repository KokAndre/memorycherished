/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AboutService } from './about.service';

describe('Service: AboutUs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutService]
    });
  });

  it('should ...', inject([AboutService], (service: AboutService) => {
    expect(service).toBeTruthy();
  }));
});
