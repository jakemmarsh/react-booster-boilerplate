import { connect }   from 'react-redux';

import CountActions  from './actions/count';
import AppComponent  from './components/app';

function mapStateToProps(store) {
  return {
    count: store.countState.get('count')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCount: (amount) => {
      dispatch(CountActions.increment(amount));
    },
    decrementCount: (amount) => {
      dispatch(CountActions.decrement(amount));
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
