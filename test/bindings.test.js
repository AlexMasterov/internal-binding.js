'use strict';

const assert = require('assert');

const assertCtorName = (fn, name) => {
  assert.deepStrictEqual(typeof fn, 'function');
  assert.deepStrictEqual(fn.name, name);
};

describe('Bindings', () => {
  const bindings = require('../src');

  describe('crypto', () => {
    it('DiffieHellman', () => {
      const exports = bindings.Crypto;
      assertCtorName(exports.DiffieHellman, '');
    });
    it('DiffieHellmanGroup', () => {
      const exports = bindings.Crypto;
      assertCtorName(exports.DiffieHellman, '');
    });
    it('ECDH', () => {
      const exports = bindings.Crypto;
      assertCtorName(exports.ECDH, '');
    });
    it('Hash', () => {
      const exports = bindings.Crypto;
      assertCtorName(exports.Hash, '');
    });
    it('Hmac', () => {
      const exports = bindings.Crypto;
      assertCtorName(exports.Hmac, '');
    });
    it('Sign', () => {
      const exports = bindings.Crypto;
      assertCtorName(exports.Sign, '');
    });
    it('Verify', () => {
      const exports = bindings.Crypto;
      assertCtorName(exports.Verify, '');
    });
  });

  describe('stream_wrap', () => {
    it('WriteWrap', () => {
      const exports = bindings.Stream;
      assertCtorName(exports.WriteWrap, 'WriteWrap');
    });
  });

  describe('pipe_wrap', () => {
    it('Pipe', () => {
      const exports = bindings.Pipe;
      assertCtorName(exports.Pipe, 'Pipe');
    });
    it('PipeConnectWrap', () => {
      const exports = bindings.Pipe;
      assertCtorName(exports.PipeConnectWrap, 'PipeConnectWrap');
    });
  });

  describe('tcp_wrap (async)', () => {
    it('TCP', async () => {
      const exports = await bindings.Tcp;
      assertCtorName(exports.TCP, 'TCP');
    });
    it('TCPConnectWrap', async () => {
      const exports = await bindings.Tcp;
      assertCtorName(exports.TCPConnectWrap, 'TCPConnectWrap');
    });
  });

  describe('async_wrap (async)', () => {
    it('AsyncWrap', async () => {
      const exports = await bindings.Async;
      assertCtorName(exports.AsyncWrap, 'AsyncWrap');
    });
  });
});
