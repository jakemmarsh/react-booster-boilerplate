import React            from 'react';
import TestUtils        from 'react-addons-test-utils';

import CounterComponent from '../../components/counter';
import HomePage         from './index';

describe('Page: Home', () => {

  let rendered;
  let props;

  function renderComponent() {
    rendered = TestUtils.renderIntoDocument(
      <HomePage {...props} />
    );
  }

  beforeEach(() => {
    props = {};

    renderComponent();
  });

  it('should render with the correct class', () => {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'home-page');
  });

  it('should render the counter component', () => {
    const counter = TestUtils.findRenderedComponentWithType(rendered, CounterComponent);

    assert.deepEqual(counter.props, rendered.props);
  });

});
