import <% name %>Page from '../../app/js/pages/<% name %>';

describe('Page: <% name %>', function() {

  let rendered;

  beforeEach(function() {
    rendered = TestUtils.renderIntoDocument(<<% name %>Page />);
  });

  it('', function() {

  });

});
