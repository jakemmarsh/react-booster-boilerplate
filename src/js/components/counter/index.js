import React from 'react';

import './styles.scss';

class CounterComponent extends React.Component {

  constructor(props) {
    super(props);

    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
  }

  handleIncrementClick() {
    this.props.incrementCount(1);
  }

  handleDecrementClick() {
    this.props.decrementCount(1);
  }

  render() {
    return (
      <div className="counter-component">
        <div className="counter-component-count">
          {this.props.count}
        </div>
        <div className="counter-component-button-container">
          <div className="counter-component-button counter-component-decrement-button"
               onClick={this.handleDecrementClick}>
            -
          </div>
          <div className="counter-component-button counter-component-increment-button"
               onClick={this.handleIncrementClick}>
            +
          </div>
        </div>
      </div>
    );
  }

}

CounterComponent.propTypes = {
  count: React.PropTypes.number,
  incrementCount: React.PropTypes.func,
  decrementCount: React.PropTypes.func
};

export default CounterComponent;
