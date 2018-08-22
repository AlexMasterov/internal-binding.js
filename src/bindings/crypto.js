'use strict';

const { Hmac, Hash } = require('crypto');

module.exports = {
  Hash: new Hash('sha1')._handle.constructor,
  Hmac: new Hmac('sha256', 'a secret')._handle.constructor,
};
