import React  from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

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
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
