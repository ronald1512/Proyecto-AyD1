import { TestBed } from '@angular/core/testing';

import { MagicBallService } from './magic-ball.service';

describe('MagicBallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicBallService = TestBed.get(MagicBallService);
    expect(service).toBeTruthy();
  });
});

describe("Magic 8 Ball Service", () => {
  it("should do nothing", () => {
    expect(true).toBeTruthy();
  });
});


describe("My first Unit testing", () => {
  it("should result in 2", () => {
    expect(1+1).toBe(2);
  });
});

