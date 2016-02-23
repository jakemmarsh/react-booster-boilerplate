import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';
import {assert}        from 'chai';

import FooterComponent from '../../app/js/components/Footer';

describe('Component: Footer', function() {

  let rendered;

  beforeEach(function() {
    rendered = TestUtils.renderIntoDocument(<FooterComponent />);
  });

  it('should render with the correct class', function() {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'footer-component');
  });

  it('should render with the correct text content', function() {
    const node = ReactDOM.findDOMNode(rendered);

    assert(node.textContent === 'Footer');
  });

});
