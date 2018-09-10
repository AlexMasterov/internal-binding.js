# internal-binding

Node.js internal bindings, accessible from user land.

## Installation

```
npm install internal-binding
```

## Usage
```javascript
const { Hash, Hmac, Sign, Verify, CryptoConstants } = require('internal-binding').Crypto;
const { Pipe, PipeConnectWrap, PipeConstants } = require('internal-binding').Pipe;
const { WriteWrap } = require('internal-binding').Stream;

// Some wraps requires asynchronous context!
(async () => {
  const {
    TCP,
    TCPConnectWrap,
    TCPConstants,
  } = await require('internal-binding').Tcp;

  const {
    AsyncWrap,
    Providers,
  } = await require('internal-binding').Async;
})();
