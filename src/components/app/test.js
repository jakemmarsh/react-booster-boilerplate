import React            from 'react';
import TestUtils        from 'react-addons-test-utils';

import HeaderComponent  from '../header';
import FooterComponent  from '../footer';
import HomePage         from '../../pages/home';
import AppComponent     from './index';

describe('Component: App', () => {

  let rendered;
  let props;

  function renderComponent() {
    rendered = TestUtils.renderIntoDocument(
      <AppComponent {...props}>
        <HomePage />
      </AppComponent>
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
    TestUtils.findRenderedDOMComponentWithClass(rendered, 'app-component');
  });

  it('should render the header', () => {
    TestUtils.findRenderedComponentWithType(rendered, HeaderComponent);
  });

  it('should render the footer', () => {
    TestUtils.findRenderedComponentWithType(rendered, FooterComponent);
  });

  it('should render its children with props', () => {
    const page =  TestUtils.findRenderedComponentWithType(rendered, HomePage);

    assert.deepEqual(page.props, rendered.props);
  });

});
