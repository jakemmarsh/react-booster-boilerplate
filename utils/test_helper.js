import { assert } from 'chai';
import sinon      from 'sinon';

before(() => {
  global.assert = assert;
  global.sinon  = sinon.sandbox.create();

  global.sinon.assert.expose(global.assert, { prefix: '' });
});
