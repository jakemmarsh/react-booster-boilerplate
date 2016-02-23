import <% name %>Component from '../../app/js/components/<% name %>';

describe('Component: <% name %>', function() {

  let rendered;

  beforeEach(function() {
    rendered = TestUtils.renderIntoDocument(<<% name %>Component />);
  });

  it('', function() {

  });

});
