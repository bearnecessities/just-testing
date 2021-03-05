const { Analyzer } = require('hint');

const userConfig = {
  connector: {
    name: 'puppeteer',
    options: {
      browser: 'Chrome',
      headless: true
    }
  },
  formatters: ['html', 'summary'],
  hints: {
    'axe/aria': 'error',
    'axe/color': 'error',
    'axe/forms': 'error',
    'axe/keyboard': 'error',
    'axe/language': 'error',
    'axe/name-role-value': 'error',
    'axe/other': 'error',
    'axe/parsing': 'error',
    'axe/semantics': 'error',
    'axe/sensory-and-visual-cues': 'error',
    'axe/structure': 'error',
    'axe/tables': 'error',
    'axe/text-alternatives': 'error',
    'axe/time-and-media': 'error'
  },
  hintsTimeout: 60000
};

const runHints = async url => {
  const webhint = await Analyzer.create(userConfig);
  const results = await webhint.analyze(url);
  console.log(`Result for: ${results[0].url}`);
  await webhint.format(results[0].problems);
  return results[0].problems;
};

exports.runHints = runHints;
