import CountConstants from './index';

describe('Constants: Count', () => {

  const CONSTANT_PREFIX = 'COUNT';

  it('should have the correctly formatted keys', () => {
    const expectedKeys = ['INCREMENT', 'DECREMENT'];

    assert.strictEqual(Object.keys(CountConstants).length, expectedKeys.length);

    expectedKeys.forEach((expectedKey) => {
      assert.strictEqual(CountConstants[expectedKey], `${CONSTANT_PREFIX}_${expectedKey}`);
    });
  });

});
