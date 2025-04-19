import { TestBed } from '@angular/core/testing';

import { MyRessourceServiceService } from './my-ressource-service.service';

describe('MyRessourceServiceService', () => {
  let service: MyRessourceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRessourceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
