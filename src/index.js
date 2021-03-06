module.exports = class InternalBinding {
  static get Crypto() { return require('./bindings/crypto'); }
  static get Stream() { return require('./bindings/stream'); }
  static get Pipe() { return require('./bindings/pipe'); }
  static get Process() { return require('./bindings/process'); }
  // Async
  static get Tcp() { return require('./bindings/tcp'); }
  static get Async() { return require('./bindings/async'); }
};
