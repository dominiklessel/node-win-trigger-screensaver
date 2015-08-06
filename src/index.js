
/**
 * Load modules
 */

const exec = require('child_process').exec;

/**
 * Helpers
 */

const command = 'rundll32 user32.dll,LockWorkStation';
const noop = function() {};

/**
 * Trigger screensaver
 */

export default function(callback) {
  if (process.platform !== 'win32') {
    throw new Error('Only works on Windows!');
  }

  exec(command, callback || noop);
}
