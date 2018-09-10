# internal-binding

Node.js internal bindings, accessible from user land.

## Installation

```
npm install internal-binding
```

## Usage
```javascript
const {
  DiffieHellman,
  DiffieHellmanGroup,
  ECDH,
  Hash,
  Hmac,
  Sign,
  Verify,
  CryptoConstants,
} = require('internal-binding').Crypto;

const { WriteWrap } = require('internal-binding').Stream;

const {
  Pipe,
  PipeConnectWrap,
  PipeConstants,
} = require('internal-binding').Pipe;

// Some wraps requires asynchronous context!
(async () => {
  const {
    TCP,
    TCPConnectWrap,
    TCPConstants,
  } = await require('internal-binding').Tcp;

  const {
    AsyncWrap,
    AsyncProviders,
  } = await require('internal-binding').Async;
})();
