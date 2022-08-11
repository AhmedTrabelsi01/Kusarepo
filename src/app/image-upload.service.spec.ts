import { TestBed } from '@angular/core/testing';

import { UploadService } from './image-upload.service';

describe('ImageUploadService', () => {
  let service: UploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
