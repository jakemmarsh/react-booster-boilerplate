import { INCREMENT, DECREMENT } from '../../constants/count';

const CountActions = {

  increment(amount) {
    return {
      type: INCREMENT,
      amount
    }
  },

  decrement(amount) {
    return {
      type: DECREMENT,
      amount
    }
  }

};

export default CountActions;
