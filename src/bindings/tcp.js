'use strict';

const { Socket, _createServerHandle } = require('net');

function extractTcp() {
  return new Promise((resolve, reject) => {
    const handle = _createServerHandle('127.0.0.1', 80);

    handle.connect = function (req, address, port) {
      resolve({
        TCP: handle.constructor,
        TCPConnectWrap: req.constructor,
        TCPConstants: {
          SOCKET: 0,
          SERVER: 1,
        },
      });

      return 0;
    };

    const socket = new Socket({ handle });

    socket.on('error', err => reject(err));
    socket.connect({ port: 80, host: '127.0.0.1' });
  });
}

module.exports = extractTcp();
