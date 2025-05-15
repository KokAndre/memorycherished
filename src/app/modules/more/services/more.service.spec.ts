/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { MoreService } from './more.service';

describe('Service: AboutUs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoreService]
    });
  });

  it('should ...', inject([MoreService], (service: MoreService) => {
    expect(service).toBeTruthy();
  }));
});
