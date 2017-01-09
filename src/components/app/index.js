import React           from 'react';

import HeaderComponent from '../header';
import FooterComponent from '../footer';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.renderChildren = this.renderChildren.bind(this);
  }

  render() {
    return (
      <div className="app-component">
        <HeaderComponent />
        {this.renderChildren()}
        <FooterComponent />
      </div>
    );
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, this.props);
    });
  }

}

AppComponent.propTypes = {
  children: React.PropTypes.element.isRequired,
  count: React.PropTypes.number.isRequired,
  incrementCount: React.PropTypes.func.isRequired,
  decrementCount: React.PropTypes.func.isRequired
};

export default AppComponent;
