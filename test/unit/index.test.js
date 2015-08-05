
import triggerScreensaver from '../../src/index';

describe('triggerScreensaver', () => {
  it('should throw an Error if not running on windows', () => {
    const test = () => {
      triggerScreensaver();
    };

    expect(test).to.throw(Error);
  });
});
