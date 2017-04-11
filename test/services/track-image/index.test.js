'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('track-image service', function() {
  it('registered the track-images service', () => {
    assert.ok(app.service('track-images'));
  });
});
