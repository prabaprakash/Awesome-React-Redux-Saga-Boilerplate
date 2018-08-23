const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const path = require('path');
require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require-module',
    '@babel/register',
    '--require',
    path.join(__dirname, 'test/features/step_definitions'),
    '--format',
    path.join(__dirname, 'node_modules/cucumber-pretty'),
    '--format',
    'json:' + path.join(__dirname, 'reports/cucumber.json'),
    path.join(__dirname, 'test/features/'),
  ],
});

module.exports = {
  output_folder: path.join(__dirname, 'reports'),
  custom_assertions_path: '',
  page_objects_path: path.join(__dirname, 'test/features/page_objects'),
  live_output: false,
  disable_colors: false,
  test_workers: {
    enabled: true,
    workers: 'auto',
  },
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:3200',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      silent: true,
      detailed_output: true,
      screenshots: {
        enabled: true,
        path: path.join(__dirname, 'reports/screenshots'),
        on_failure: true,
        on_error: true,
      },
      desiredCapabilities: {
        unexpectedAlertBehaviour: 'accept',
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'verbose', 'window-size=1280,1480'],
        },
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path,
        },
      },
    },
  },
};
