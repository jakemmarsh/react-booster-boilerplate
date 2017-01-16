import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';

import FooterComponent from './index';

describe('Component: Footer', () => {

  let rendered;
  let props;

  function renderComponent() {
    rendered = TestUtils.renderIntoDocument(
      <FooterComponent {...props} />
    );
  }

  beforeEach(() => {
    props = {};

    renderComponent();
  });

  it('should render with the correct class', () => {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'footer-component');
  });

  it('should render with the correct text content', () => {
    const node = ReactDOM.findDOMNode(rendered);

    assert.strictEqual(node.textContent, 'Footer');
  });

});
