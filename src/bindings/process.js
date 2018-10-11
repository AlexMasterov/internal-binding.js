'use strict';

const { exec } = require('child_process');

module.exports = {
  Process: exec('ping', { maxBuffer: 0, timeout: 1 })
    ._handle.constructor,
};
