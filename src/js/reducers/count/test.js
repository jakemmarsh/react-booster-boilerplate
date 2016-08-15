import Immutable      from 'immutable';
import { assert }     from 'chai';

import CountConstants from '../../constants/count';
import CountReducer   from './index';

describe('Reducers: Count', () => {

  it('should return the default state', () => {
    assert.isTrue(Immutable.is(CountReducer(undefined, {}), Immutable.Map({ count: 1 })));
  });

  context('with INCREMENT action', () => {
    it('should increment the count', () => {
      assert.isTrue(Immutable.is(
        CountReducer(undefined, {
          type: CountConstants.INCREMENT,
          payload: 2
        }),
        Immutable.Map({ count: 3 })
      ));

      assert.isTrue(Immutable.is(
        CountReducer({ count: 2 }, {
          type: CountConstants.INCREMENT,
          payload: 2
        }),
        Immutable.Map({ count: 4 })
      ));
    });
  });

  context('with DECREMENT action', () => {
    it('should decrement the count', () => {
      assert.isTrue(Immutable.is(
        CountReducer(undefined, {
          type: CountConstants.DECREMENT,
          payload: 1
        }),
        Immutable.Map({ count: 0 })
      ));

      assert.isTrue(Immutable.is(
        CountReducer({ count: 5 }, {
          type: CountConstants.DECREMENT,
          payload: 2
        }),
        Immutable.Map({ count: 3 })
      ));
    });
  });

});
