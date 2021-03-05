const { expect } = require('chai'),
  webhint = require('../accessibility/hints');

describe('Accessibility Tests', function() {
  it('hint-axe checks', async function() {
    const results = await webhint.runHints('https://webhint.io/');
    console.log(results)
    expect(results.length).to.be.at.least(1);
  }).timeout(100000);
});
