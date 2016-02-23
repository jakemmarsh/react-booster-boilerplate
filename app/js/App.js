import React           from 'react';

import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';

const propTypes = {
  children: React.PropTypes.element.isRequired
};

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <HeaderComponent />
        {this.props.children}
        <FooterComponent />
      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
