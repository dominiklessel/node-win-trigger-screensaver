(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('nircmd')) : typeof define === 'function' && define.amd ? define(['nircmd'], factory) : global.startScreensaver = factory(global.nircmd);
})(this, function (nircmd) {
  'use strict';

  /**
   * Load modules
   */

  var noop = function noop() {};

  /**
   * Trigger screensaver
   */

  var index = function index(callback) {
    if (process.platform !== 'win32') {
      throw new Error('Only works on Windows!');
    }

    nircmd('screensaver', callback || noop);
  };

  return index;
});
//# sourceMappingURL=./startScreensaver.js.map