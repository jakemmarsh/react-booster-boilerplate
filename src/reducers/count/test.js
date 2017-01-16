import Immutable      from 'immutable';

import CountConstants from '../../constants/count';
import CountReducer   from './index';

describe('Reducers: Count', () => {

  it('should return the default state', () => {
    assert.isTrue(Immutable.is(CountReducer(undefined, {}), Immutable.Map({ count: 1 })));
  });

  context('with INCREMENT action', () => {
    it('should increment the count when not passed state', () => {
      const state = undefined;
      const action = {
        type: CountConstants.INCREMENT,
        payload: 2
      };
      const expected = Immutable.Map({
        count: 3
      });

      assert.isTrue(Immutable.is(CountReducer(state, action), expected));
    });

    it('should increment the count when passed state', () => {
      const state = {
        count: 2
      };
      const action = {
        type: CountConstants.INCREMENT,
        payload: 2
      };
      const expected = Immutable.Map({
        count: 4
      });

      assert.isTrue(Immutable.is(CountReducer(state, action), expected));
    });
  });

  context('with DECREMENT action', () => {
    it('should decrement the count when not passed state', () => {
      const state = undefined;
      const action = {
        type: CountConstants.DECREMENT,
        payload: 1
      };
      const expected = Immutable.Map({
        count: 0
      });

      assert.isTrue(Immutable.is(CountReducer(state, action), expected));
    });

    it('should decrement the count when passed state', () => {
      const state = {
        count: 5
      };
      const action = {
        type: CountConstants.DECREMENT,
        payload: 2
      };
      const expected = Immutable.Map({
        count: 3
      });

      assert.isTrue(Immutable.is(CountReducer(state, action), expected));
    });
  });

});
