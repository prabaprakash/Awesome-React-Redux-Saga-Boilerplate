# Pre-requisites:
  *  Node v8.9.4
  *  PM2        : `npm install -g pm2`

# Clone:
  `git clone https://github.com/prabaprakash/React_Redux_Saga_Boilerplate.git`

# Start Application:
  * `npm install`  to download dependencies
  # Dev Mode
  * `npm run start` start the application in watch mode for server side code and client side code with webpack
  * Open http://localhost:3200/ to see the application in normal mode
```shell
$ npm run start

> reactredux@1.0.0 prestart C:\Users\paranganat\Desktop\ReactRedux
> pm2 start src/server/ecosystem.config.js

[PM2] Spawning PM2 daemon with pm2_home=C:\Users\paranganat\.pm2
[PM2] PM2 Successfully daemonized
[PM2][WARN] Applications redux not running, starting...
[PM2] App [redux] launched (1 instances)
┌──────────┬────┬─────────┬─────┬────────┬─────────┬────────┬─────┬───────────┬────────────┬──────────┐
│ App name │ id │ mode    │ pid │ status │ restart │ uptime │ cpu │ mem       │ user       │ watching │
├──────────┼────┼─────────┼─────┼────────┼─────────┼────────┼─────┼───────────┼────────────┼──────────┤
│ redux    │ 0  │ cluster │ 204 │ online │ 0       │ 0s     │ 0%  │ 30.8 MB   │ paranganat │ enabled  │
└──────────┴────┴─────────┴─────┴────────┴─────────┴────────┴─────┴───────────┴────────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app

> reactredux@1.0.0 start C:\Users\paranganat\Desktop\ReactRedux
> npm run build:dll:dev && webpack -d --watch --progress --colors


> reactredux@1.0.0 build:dll:dev C:\Users\paranganat\Desktop\ReactRedux
> webpack -d --config webpack.library.config.js

Hash: 273f819a279e321c8a19
Version: webpack 4.17.0
Time: 1015ms
Built at: 2018-08-23 13:59:20
        Asset      Size  Chunks             Chunk Names
lib.bundle.js  2.51 MiB     lib  [emitted]  lib
Entrypoint lib = lib.bundle.js
[./config/library.js] 134 bytes {lib} [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {lib} [built]
[./node_modules/webpack/buildin/harmony-module.js] (webpack)/buildin/harmony-module.js 573 bytes {lib} [built]
[0] dll lib 12 bytes {lib} [built]
    + 88 hidden modules
 10% building modules 1/1 modules 0 active
webpack is watching the files…

Hash: 4594c6f44017c438b08c
Version: webpack 4.17.0
Time: 7542ms
Built at: 2018-08-23 13:59:30
     Asset       Size  Chunks             Chunk Names
 bundle.js   2.42 MiB      js  [emitted]  js
bundle.css  197 bytes      js  [emitted]  js
Entrypoint js = bundle.js bundle.css
[./node_modules/react-dom/index.js] delegated ./node_modules/react-dom/index.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/react-redux/es/index.js] delegated ./node_modules/react-redux/es/index.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/react/index.js] delegated ./node_modules/react/index.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/redux-saga/es/effects.js] delegated ./node_modules/redux-saga/es/effects.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/redux-saga/es/index.js] delegated ./node_modules/redux-saga/es/index.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/redux/es/redux.js] delegated ./node_modules/redux/es/redux.js from dll-reference lib 42 bytes {js} [built]
[0] multi babel-polyfill ./src/client/index.js 40 bytes {js} [built]
[./node_modules/webpack/buildin/global.js] delegated ./node_modules/webpack/buildin/global.js from dll-reference lib 42 bytes {js} [built]
[./src/client/constants/index.js] 402 bytes {js} [built]
[./src/client/containers/App.js] 825 bytes {js} [built]
[./src/client/index.js] 1.68 KiB {js} [built]
[./src/client/reducers/combined.js] 498 bytes {js} [built]
[./src/client/reducers/recipe.js] 1.03 KiB {js} [built]
[./src/client/sagas/combined.js] 812 bytes {js} [built]
[dll-reference lib] external "lib" 42 bytes {js} [built]
    + 342 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js!node_modules/sass-loader/lib/loader.js!src/client/styles/App.scss:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    [./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/client/styles/App.scss] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/client/styles/App.scss 376 bytes {0} [built]
        + 1 hidden module
```
  # Production Mode
  * `npm run prod` to run application in production mode
  * Open http://localhost:3200/ to see the application in normal mode
```shell
$ npm run prod

> reactredux@1.0.0 preprod C:\Users\paranganat\Desktop\ReactRedux
> pm2 start src/server/ecosystem.config.js

[PM2] Applying action restartProcessId on app [redux](ids: 0)
      1 [sig] sh 21756! sigpacket::process: Suppressing signal 18 to win32 process (pid 0)
[PM2] [redux](0) ✓
┌──────────┬────┬─────────┬───────┬────────┬─────────┬────────┬─────┬───────────┬────────────┬──────────┐
│ App name │ id │ mode    │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user       │ watching │
├──────────┼────┼─────────┼───────┼────────┼─────────┼────────┼─────┼───────────┼────────────┼──────────┤
│ redux    │ 0  │ cluster │ 28076 │ online │ 7       │ 0s     │ 0%  │ 30.8 MB   │ paranganat │ enabled  │
└──────────┴────┴─────────┴───────┴────────┴─────────┴────────┴─────┴───────────┴────────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app

> reactredux@1.0.0 prod C:\Users\paranganat\Desktop\ReactRedux
> npm run build:dll:prod && webpack -p --watch --progress --colors


> reactredux@1.0.0 build:dll:prod C:\Users\paranganat\Desktop\ReactRedux
> webpack -p --config webpack.library.config.js

Hash: 3aea877b692f3ac0c1c1
Version: webpack 4.17.0
Time: 3683ms
Built at: 2018-08-23 13:53:15
        Asset     Size  Chunks             Chunk Names
lib.bundle.js  209 KiB       0  [emitted]  lib
Entrypoint lib = lib.bundle.js
[34] (webpack)/buildin/global.js 489 bytes {0} [built]
[59] dll lib 12 bytes {0} [built]
[60] ./config/library.js 134 bytes {0} [built]
[73] (webpack)/buildin/harmony-module.js 573 bytes {0} [built]
    + 82 hidden modules
 10% building modules 1/1 modules 0 active
webpack is watching the files…

Hash: 837c3d70baf7e633121f
Version: webpack 4.17.0
Time: 11491ms
Built at: 2018-08-23 13:53:31
     Asset       Size  Chunks             Chunk Names
 bundle.js    167 KiB       0  [emitted]  js
bundle.css  178 bytes       0  [emitted]  js
Entrypoint js = bundle.js bundle.css
 [27] external "lib" 42 bytes {0} [built]
 [47] ./src/client/constants/index.js 402 bytes {0} [built]
 [66] delegated ./node_modules/webpack/buildin/global.js from dll-reference lib 42 bytes {0} [built]
 [93] delegated ./node_modules/redux/es/redux.js from dll-reference lib 42 bytes {0} [built]
[129] delegated ./node_modules/react/index.js from dll-reference lib 42 bytes {0} [built]
[130] delegated ./node_modules/react-redux/es/index.js from dll-reference lib 42 bytes {0} [built]
[132] multi babel-polyfill ./src/client/index.js 40 bytes {0} [built]
[335] ./src/client/index.js 1.68 KiB {0} [built]
[336] delegated ./node_modules/react-dom/index.js from dll-reference lib 42 bytes {0} [built]
[337] delegated ./node_modules/redux-saga/es/index.js from dll-reference lib 42 bytes {0} [built]
[338] ./src/client/reducers/combined.js 498 bytes {0} [built]
[341] ./src/client/containers/App.js 825 bytes {0} [built]
[346] ./src/client/sagas/combined.js 812 bytes {0} [built]
[347] ./src/client/sagas/add.js 2.03 KiB {0} [built]
[348] ./src/client/sagas/start.js 2.22 KiB {0} [built]
    + 342 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js!node_modules/sass-loader/lib/loader.js!src/client/styles/Ap
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    [0] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/client/styles/App.scss 353 bytes {0} [built]
        + 1 hidden module
```

# Run Tests
  * `npm run test` to run unit test and see code coverage
```shell
$ npm run test

> reactredux@1.0.0 test C:\Users\paranganat\Desktop\ReactRedux
> nyc mocha



  App Component
    √ renders div
    √ renders react player div


  2 passing (78ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |    88.89 |      100 |       50 |    88.89 |                   |
 App.jsx  |    88.89 |      100 |       50 |    88.89 |                24 |
----------|----------|----------|----------|----------|-------------------|
```
  *	`npm run featuretest` to run feature tests.
```shell
$ npm run featuretest

> reactredux@1.0.0 featuretest C:\Users\paranganat\Desktop\ReactRedux
> nightwatch

Starting selenium server in parallel mode... started - PID:  3504

Started child process for: features\google-search
Started child process for: features\scenario-outlines-support
Started child process for: features\yahoo-search
 features\google-search   Feature: Google Search
 features\google-search
 features\google-search   Scenario: Searching Google
 features\google-search   Given I open Google`s search page
 features\google-search   √ Element <body> was visible after 32 milliseconds.
 features\google-search   Then the title is "Google"
 features\google-search   √ Testing if the page title equals "Google".
 features\google-search   And the Google search form exists
 features\google-search   √ Testing if element <input[name="q"]> is visible.
 features\google-search
 features\google-search   Scenario: Searching Google again
 features\google-search   Given I open Google`s search page
 features\google-search   √ Element <body> was visible after 24 milliseconds.
 features\google-search   Then the title is "Google"
 features\google-search   √ Testing if the page title equals "Google".
 features\google-search   And the Google search form exists
 features\google-search   √ Testing if element <input[name="q"]> is visible.
 features\google-search
 features\google-search   2 scenarios (2 passed)
6 steps (6 passed)
0m10.244s

  >> features\google-search finished.

 features\scenario-outlines-support   Feature: Scenario outlines support
 features\scenario-outlines-support
 features\scenario-outlines-support   Scenario Outline: Searching Google
 features\scenario-outlines-support   Given I open Google`s search page
 features\scenario-outlines-support   √ Element <body> was visible after 35 milliseconds.
 features\scenario-outlines-support   When I search for 36/6
 features\scenario-outlines-support   Then the search result should contain 6
 features\scenario-outlines-support   √ Testing if element <body> contains text: "6".
 features\scenario-outlines-support
 features\scenario-outlines-support   Scenario Outline: Searching Google
 features\scenario-outlines-support   Given I open Google`s search page
 features\scenario-outlines-support   √ Element <body> was visible after 24 milliseconds.
 features\scenario-outlines-support   When I search for 500+120
 features\scenario-outlines-support   Then the search result should contain 620
 features\scenario-outlines-support   √ Testing if element <body> contains text: "620".
 features\scenario-outlines-support
 features\scenario-outlines-support   2 scenarios (2 passed)
6 steps (6 passed)
0m14.717s

  >> features\scenario-outlines-support finished.

 features\yahoo-search   Feature: Yahoo Search
 features\yahoo-search
 features\yahoo-search   Scenario: Searching Yahoo
 features\yahoo-search   Given I open Yahoo`s search page
 features\yahoo-search   √ Element <body> was visible after 36 milliseconds.
 features\yahoo-search   Then the title is "Yahoo"
 features\yahoo-search   √ Testing if the page title equals "Yahoo".
 features\yahoo-search   And the Yahoo search form exists
 features\yahoo-search   √ Testing if element <input[name="p"]> is visible.
 features\yahoo-search
 features\yahoo-search   1 scenario (1 passed)
3 steps (3 passed)
0m15.591s

  >> features\yahoo-search finished.


INFO Selenium process finished.
```

# Linting
  * JS   - `npm run lint ` to run jslint
  * JSON - `npm run jsonlint` to run jsonlint
  * Style- `npm run stylelint` to run style-lint.
 
### License
Copyright (c) 2018 Praba Prakash, contributors.

Released under the [MIT license](https://tldrlegal.com/license/mit-license).

Screenshots are [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) (Attribution-ShareAlike)
