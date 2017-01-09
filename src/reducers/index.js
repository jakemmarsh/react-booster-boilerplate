import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';

import CountReducer        from './count';

const Reducers = combineReducers({
  countState: CountReducer,
  routing: routerReducer
});

export default Reducers;
