import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';
import {assert}        from 'chai';

import HomePage        from '../../app/js/pages/Home';

describe('Page: Home', function() {

  let rendered;

  beforeEach(function() {
    rendered = TestUtils.renderIntoDocument(<HomePage />);
  });

  it('should render with the correct class', function() {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'home-page');
  });

  it('should render with the correct text content', function() {
    const node = ReactDOM.findDOMNode(rendered);

    assert(node.textContent === 'Home page');
  });

});
