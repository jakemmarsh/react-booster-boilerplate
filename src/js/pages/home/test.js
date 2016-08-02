import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';
import {assert}        from 'chai';

import HomePage        from './index';

describe('Page: Home', () => {

  let rendered;

  beforeEach(() => {
    rendered = TestUtils.renderIntoDocument(
      <HomePage />
    );
  });

  it('should render with the correct class', () => {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'home-page');
  });

  it('should render with the correct text content', () => {
    const node = ReactDOM.findDOMNode(rendered);

    assert.strictEqual(node.textContent, 'Home page');
  });

});
