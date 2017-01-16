import CountConstants from '../../constants/count';
import CountActions   from './index';

describe('Actions: Count', () => {

  describe('#increment', () => {
    it('should create an action to increment a count', () => {
      const amount = 3;
      const expectedAction = {
        type: CountConstants.INCREMENT,
        payload: amount
      };

      assert.deepEqual(CountActions.increment(amount), expectedAction);
    });
  });

  describe('#decrement', () => {
    it('should create an action to decrement a count', () => {
      const amount = 1;
      const expectedAction = {
        type: CountConstants.DECREMENT,
        payload: amount
      };

      assert.deepEqual(CountActions.decrement(amount), expectedAction);
    });
  });

});
