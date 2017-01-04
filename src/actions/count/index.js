import CountConstants from '../../constants/count';

const CountActions = {

  increment(amount) {
    return {
      type: CountConstants.INCREMENT,
      payload: amount
    }
  },

  decrement(amount) {
    return {
      type: CountConstants.DECREMENT,
      payload: amount
    }
  }

};

export default CountActions;
