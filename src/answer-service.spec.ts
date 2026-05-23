import { TestBed } from '@angular/core/testing';

import { AnswerService } from './answer-service';
import { DateTime } from 'luxon';
import { ALL_CHARACTERS } from './characters';

describe('AnswerService', () => {
  let service: AnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAnswer', () => {
    it('should select the next item in the answers array on the next day', () => {
      const seedDate = DateTime.now();
      const answer1 = service.getAnswer(seedDate);
      const answer2 = service.getAnswer(seedDate.plus({ days: 1 }));

      if (ALL_CHARACTERS.indexOf(answer1) !== ALL_CHARACTERS.length - 1) {
        expect(ALL_CHARACTERS.indexOf(answer1)).toEqual(ALL_CHARACTERS.indexOf(answer2) - 1);
      } else {
        expect(ALL_CHARACTERS.indexOf(answer2)).toEqual(0);
      }
    });
  });
});
