exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com/',
      show: true,
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    allure: {
      "enabled": true
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'codeceptjs-playwright-example'
}