import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';
import {assert}        from 'chai';

import HeaderComponent from '../../app/js/components/Header';

describe('Component: Header', function() {

  let rendered;

  beforeEach(function() {
    rendered = TestUtils.renderIntoDocument(<HeaderComponent />);
  });

  it('should render with the correct class', function() {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'header-component');
  });

  it('should render with the correct text content', function() {
    const node = ReactDOM.findDOMNode(rendered);

    assert(node.textContent === 'Header');
  });

});
