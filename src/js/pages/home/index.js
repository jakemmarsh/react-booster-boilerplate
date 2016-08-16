import React            from 'react';

import CounterComponent from '../../components/counter';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <CounterComponent {...this.props} />
      </div>
    );
  }

}

HomePage.propTypes = {
  count: React.PropTypes.number,
  incrementCount: React.PropTypes.func,
  decrementCount: React.PropTypes.func
};

export default HomePage;
