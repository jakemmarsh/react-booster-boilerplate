import React           from 'react';
import ReactDOM        from 'react-dom';
import TestUtils       from 'react-addons-test-utils';

import HeaderComponent from './index';

describe('Component: Header', () => {

  let rendered;
  let props;

  function renderComponent() {
    rendered = TestUtils.renderIntoDocument(
      <HeaderComponent {...props} />
    );
  }

  beforeEach(() => {
    props = {};

    renderComponent();
  });

  it('should render with the correct class', () => {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'header-component');
  });

  it('should render with the correct text content', () => {
    const node = ReactDOM.findDOMNode(rendered);

    assert.strictEqual(node.textContent, 'Header');
  });

});
