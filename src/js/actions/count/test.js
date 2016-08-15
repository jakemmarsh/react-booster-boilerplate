import {assert}                 from 'chai';

import { INCREMENT, DECREMENT } from '../../constants/count';
import CountActions             from './index';

describe('Actions: Count', () => {

  describe('#increment', () => {
    it('should create an action to increment a count', () => {
      const amount = 3;
      const expectedAction = {
        type: INCREMENT,
        amount
      };

      assert.deepEqual(CountActions.increment(amount), expectedAction);
    });
  });

  describe('#decrement', () => {
    it('should create an action to decrement a count', () => {
      const amount = 1;
      const expectedAction = {
        type: DECREMENT,
        amount
      };

      assert.deepEqual(CountActions.decrement(amount), expectedAction);
    });
  });

});
