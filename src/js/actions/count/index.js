import CountConstants from '../../constants/count';

const CountActions = {

  increment(amount) {
    return {
      type: CountConstants.INCREMENT,
      amount
    }
  },

  decrement(amount) {
    return {
      type: CountConstants.DECREMENT,
      amount
    }
  }

};

export default CountActions;
