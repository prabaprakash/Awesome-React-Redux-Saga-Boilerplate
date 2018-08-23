'use strict';
module.exports = {
  apps: [
    {
      name: 'redux',
      script: 'src/server/index.js',
      instances: 1,
      exec_mode: 'cluster',
      ignore_watch: ['logs', 'node_modules', '.git'],
      env: {
        DEBUG: 'fetch:*',
      },
      log_file: './logs/redux.log',
      out_file: './logs/redux_access.log',
      err_file: './logs/redux_error.log',
      watch: ['src/dist', 'src/server'],
    },
  ],
};
