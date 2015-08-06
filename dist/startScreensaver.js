(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.startScreensaver = factory();
})(this, function () {
  'use strict';

  /**
   * Load modules
   */

  var exec = require('child_process').exec;

  /**
   * Helpers
   */

  var command = 'rundll32 user32.dll,LockWorkStation';
  var noop = function noop() {};

  /**
   * Trigger screensaver
   */

  var index = function index(callback) {
    if (process.platform !== 'win32') {
      throw new Error('Only works on Windows!');
    }

    exec(command, callback || noop);
  };

  return index;
});
//# sourceMappingURL=./startScreensaver.js.map