import { TestBed } from '@angular/core/testing';

import { ResumeDownload } from './resume-download';

describe('ResumeDownload', () => {
  let service: ResumeDownload;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeDownload);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
