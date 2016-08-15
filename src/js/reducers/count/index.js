import Immutable      from 'immutable';

import CountConstants from '../../constants/count';

const initialState = Immutable.Map({
  count: 1
});

export default function update(state = initialState, action) {
  state = Immutable.fromJS(state);

  let newState = state;

  if ( action.type === CountConstants.INCREMENT ) {
    newState = newState.set('count', state.get('count') + action.payload);
  } else if ( action.type === CountConstants.DECREMENT ) {
    newState = newState.set('count', state.get('count') - action.payload);
  }

  return newState;
};
