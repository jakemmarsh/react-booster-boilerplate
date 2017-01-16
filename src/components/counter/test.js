import React            from 'react';
import TestUtils        from 'react-addons-test-utils';

import CounterComponent from './index';

describe('Component: Counter', () => {

  let rendered;
  let props;

  function renderComponent() {
    rendered = TestUtils.renderIntoDocument(
      <CounterComponent {...props} />
    );
  }

  beforeEach(() => {
    props = {
      count: 2,
      incrementCount: sinon.stub(),
      decrementCount: sinon.stub()
    };

    renderComponent();
  });

  it('should render with the correct class', () => {
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'counter-component');
  });

  it('should render the count', () => {
    const count = TestUtils.findRenderedDOMComponentWithClass(rendered, 'counter-component-count');

    assert.strictEqual(count.textContent, props.count.toString());
  });

  it('should call props.decrementCount on decrement button click', () => {
    const decrementButton = TestUtils.findRenderedDOMComponentWithClass(rendered, 'counter-component-decrement-button');

    TestUtils.Simulate.click(decrementButton);

    assert.calledOnce(props.decrementCount);
    assert.calledWith(props.decrementCount, 1);
  });

  it('should call props.incrementCount on increment button click', () => {
    const incrementButton = TestUtils.findRenderedDOMComponentWithClass(rendered, 'counter-component-increment-button');

    TestUtils.Simulate.click(incrementButton);

    assert.calledOnce(props.incrementCount);
    assert.calledWith(props.incrementCount, 1);
  });

});
