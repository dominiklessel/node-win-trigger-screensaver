
/**
 * Load modules
 */

import nircmd from 'nircmd';

/**
 * Helpers
 */

const noop = function() {};

/**
 * Trigger screensaver
 */

export default function(callback) {
  if (process.platform !== 'win32') {
    throw new Error('Only works on Windows!');
  }

  nircmd('screensaver', callback || noop);
}
