import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';
import {assert}        from 'chai';

import FooterComponent from './index';

describe('Component: Footer', () => {

  let rendered;

  beforeEach(() => {
    rendered = TestUtils.renderIntoDocument(<FooterComponent />);
  });

  it('should render with the correct class', () => {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'footer-component');
  });

  it('should render with the correct text content', () => {
    const node = ReactDOM.findDOMNode(rendered);

    assert(node.textContent === 'Footer');
  });

});
