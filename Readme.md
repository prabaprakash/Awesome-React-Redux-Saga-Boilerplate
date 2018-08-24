![](https://raw.githubusercontent.com/prabaprakash/React-Redux-Saga-Boilerplate/master/doc/app.gif)
# Pre-requisites:
  *  Node v8.9.4
  *  PM2        : `npm install -g pm2`

# Clone:
  `git clone https://github.com/prabaprakash/React-Redux-Saga-Boilerplate.git`

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
┌──────────┬────┬─────────┬───────┬────────┬─────────┬────────┬─────┬───────────┬────────────┬──────────┐
│ App name │ id │ mode    │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user       │ watching │
├──────────┼────┼─────────┼───────┼────────┼─────────┼────────┼─────┼───────────┼────────────┼──────────┤
│ redux    │ 0  │ cluster │ 29636 │ online │ 0       │ 0s     │ 0%  │ 30.8 MB   │ paranganat │ enabled  │
└──────────┴────┴─────────┴───────┴────────┴─────────┴────────┴─────┴───────────┴────────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app

> reactredux@1.0.0 start C:\Users\paranganat\Desktop\ReactRedux
> npm run build:dll:dev && webpack -d --watch --progress --colors


> reactredux@1.0.0 build:dll:dev C:\Users\paranganat\Desktop\ReactRedux
> webpack -d --config webpack.library.config.js

Hash: 8f76e759f069692e3394
Version: webpack 4.17.0
Time: 2409ms
Built at: 2018-08-24 21:40:26
        Asset      Size  Chunks             Chunk Names
lib.bundle.js  3.98 MiB     lib  [emitted]  lib
Entrypoint lib = lib.bundle.js
[./config/library.js] 139 bytes {lib} [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {lib} [built]
[./node_modules/webpack/buildin/harmony-module.js] (webpack)/buildin/harmony-module.js 573 bytes {lib} [built]
[0] dll lib 12 bytes {lib} [built]
    + 327 hidden modules
 10% building modules 1/1 modules 0 active
webpack is watching the files…
                                                                                                                                  Hash: 3cacd1f61bedfa76ed8d
Version: webpack 4.17.0
Time: 11235ms
Built at: 2018-08-24 21:40:44
     Asset       Size  Chunks             Chunk Names
 bundle.js   1.07 MiB      js  [emitted]  js
bundle.css  349 bytes      js  [emitted]  js
Entrypoint js = bundle.js bundle.css
[./node_modules/react-dom/index.js] delegated ./node_modules/react-dom/index.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/react-redux/es/index.js] delegated ./node_modules/react-redux/es/index.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/react/index.js] delegated ./node_modules/react/index.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/redux-saga/es/effects.js] delegated ./node_modules/redux-saga/es/effects.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/redux-saga/es/index.js] delegated ./node_modules/redux-saga/es/index.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/redux/es/redux.js] delegated ./node_modules/redux/es/redux.js from dll-reference lib 42 bytes {js} [built]
[./node_modules/webpack/buildin/global.js] delegated ./node_modules/webpack/buildin/global.js from dll-reference lib 42 bytes {js} [built]
[./src/client/actions/index.js] 1.12 KiB {js} [built]
[0] multi babel-polyfill ./src/client/index.js 40 bytes {js} [built]
[./src/client/constants/index.js] 447 bytes {js} [built]
[./src/client/containers/App.js] 843 bytes {js} [built]
[./src/client/index.js] 1.79 KiB {js} [built]
[./src/client/reducers/combined.js] 415 bytes {js} [built]
[./src/client/sagas/calc.js] 6.14 KiB {js} [built]
[./src/client/sagas/combined.js] 1.16 KiB {js} [built]
    + 337 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js!node_modules/sass-loader/lib/loader.js!src/client/styles/App.scss:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    [./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/client/styles/App.scss] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/client/styles/App.scss 535 bytes {0} [built]
        + 1 hidden module
```
  # Production Mode
  * `npm run prod` to run application in production mode
  * Open http://localhost:3200/ to see the application in normal mode
```shell
$ npm run prod

> reactredux@1.0.0 preprod C:\Users\paranganat\Desktop\ReactRedux
> pm2 start src/server/ecosystem.config.js

[PM2] Spawning PM2 daemon with pm2_home=C:\Users\paranganat\.pm2
[PM2] PM2 Successfully daemonized
[PM2][WARN] Applications redux not running, starting...
[PM2] App [redux] launched (1 instances)
┌──────────┬────┬─────────┬───────┬────────┬─────────┬────────┬───────┬───────────┬────────────┬──────────┐
│ App name │ id │ mode    │ pid   │ status │ restart │ uptime │ cpu   │ mem       │ user       │ watching │
├──────────┼────┼─────────┼───────┼────────┼─────────┼────────┼───────┼───────────┼────────────┼──────────┤
│ redux    │ 0  │ cluster │ 18624 │ online │ 0       │ 0s     │ 18.7% │ 30.9 MB   │ paranganat │ enabled  │
└──────────┴────┴─────────┴───────┴────────┴─────────┴────────┴───────┴───────────┴────────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app

> reactredux@1.0.0 prod C:\Users\paranganat\Desktop\ReactRedux
> npm run build:dll:prod && webpack -p --watch --progress --colors


> reactredux@1.0.0 build:dll:prod C:\Users\paranganat\Desktop\ReactRedux
> webpack -p --config webpack.library.config.js

Hash: db478f551a9bcb7e7b77
Version: webpack 4.17.0
Time: 8452ms
Built at: 2018-08-24 22:45:15
        Asset     Size  Chunks                    Chunk Names
lib.bundle.js  349 KiB       0  [emitted]  [big]  lib
Entrypoint lib [big] = lib.bundle.js
[137] (webpack)/buildin/global.js 489 bytes {0} [built]
[240] dll lib 12 bytes {0} [built]
[241] ./config/library.js 139 bytes {0} [built]
[253] (webpack)/buildin/harmony-module.js 573 bytes {0} [built]
    + 321 hidden modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  lib.bundle.js (349 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  lib (349 KiB)
      lib.bundle.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
 10% building modules 1/1 modules 0 active
webpack is watching the files…

Hash: 088a67f37012a984bf26
Version: webpack 4.17.0
Time: 10197ms
Built at: 2018-08-24 22:45:30
     Asset       Size  Chunks             Chunk Names
 bundle.js   97.5 KiB       0  [emitted]  js
bundle.css  288 bytes       0  [emitted]  js
Entrypoint js = bundle.js bundle.css
 [65] ./src/client/constants/index.js 447 bytes {0} [built]
 [92] delegated ./node_modules/redux/es/redux.js from dll-reference lib 42 bytes {0} [built]
 [93] delegated ./node_modules/webpack/buildin/global.js from dll-reference lib 42 bytes {0} [built]
[128] delegated ./node_modules/react/index.js from dll-reference lib 42 bytes {0} [built]
[129] delegated ./node_modules/react-redux/es/index.js from dll-reference lib 42 bytes {0} [built]
[130] delegated ./node_modules/redux-saga/es/effects.js from dll-reference lib 42 bytes {0} [built]
[131] multi babel-polyfill ./src/client/index.js 40 bytes {0} [built]
[334] ./src/client/index.js 1.79 KiB {0} [built]
[335] delegated ./node_modules/react-dom/index.js from dll-reference lib 42 bytes {0} [built]
[336] delegated ./node_modules/redux-saga/es/index.js from dll-reference lib 42 bytes {0} [built]
[337] ./src/client/reducers/combined.js 415 bytes {0} [built]
[339] ./src/client/containers/App.js 843 bytes {0} [built]
[343] ./src/client/actions/index.js 1.12 KiB {0} [built]
[345] ./src/client/sagas/combined.js 1.16 KiB {0} [built]
[346] ./src/client/sagas/calc.js 6.14 KiB {0} [built]
    + 337 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js!node_modules/sass-loader/lib/loader.js!src/client/styles/App.scss:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    [0] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/client/styles/App.scss 463 bytes {0} [built]
        + 1 hidden module
```

# Run Tests
  * `npm run test` to run unit test and see code coverage
```shell
$ npm run test

> reactredux@1.0.0 test C:\Users\paranganat\Desktop\ReactRedux
> nyc mocha



Application listening on port 3200
  actions
    √ should trigger the ADD action
    √ should trigger the SUB action
    √ should trigger the CHANGE action

  App Component
    √ renders div
    √ should render two button
    √ verify add click
    √ verify sub click
    √ should call text box value change event

  App Container
    √ should render successfully provided by store

  calc Reducer
    √ for action save, set number
    √ for action default, return old state

  calc sagatest
    initalizeWatcher test
      √ should listen to actions.INITALIZE_APPLICATION
      √ should be done
    addWatcher test
      √ should listen to actions.ADD
      √ should be done
    subWatcher test
      √ should listen to actions.SUB
      √ should be done
    changeWatcher test
      √ should listen to actions.CHANGE
      √ should be done
    addNumber test
      √ should put actions.save
      √ should be done
    subNumber test
      √ should put actions.save
      √ should be done
    changeNumber test
      √ should put actions.save
      √ should be done

  rootSaga
    √ should check the number of listeners

  Server
    get index
      √ It should get index
    get unknown route
      √ It should throw error for unknown route


  28 passing (120ms)

-------------------|----------|----------|----------|----------|-------------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |    91.67 |    72.55 |    90.32 |    90.67 |                   |
 client/actions    |      100 |      100 |      100 |      100 |                   |
  index.js         |      100 |      100 |      100 |      100 |                   |
 client/components |      100 |       50 |      100 |      100 |                   |
  App.jsx          |      100 |       50 |      100 |      100 |                12 |
 client/constants  |      100 |      100 |      100 |      100 |                   |
  index.js         |      100 |      100 |      100 |      100 |                   |
 client/containers |      100 |      100 |      100 |      100 |                   |
  App.js           |      100 |      100 |      100 |      100 |                   |
 client/helpers    |      100 |       75 |      100 |      100 |                   |
  actionCreator.js |      100 |       75 |      100 |      100 |                 1 |
 client/reducers   |      100 |       75 |      100 |      100 |                   |
  calc.js          |      100 |       75 |      100 |      100 |                 3 |
 client/sagas      |    76.92 |    71.43 |    88.89 |    76.92 |                   |
  calc.js          |    72.73 |       75 |     87.5 |    72.73 |   4,6,11,23,37,50 |
  combined.js      |      100 |    33.33 |      100 |      100 |                 3 |
 server            |    92.31 |      100 |    66.67 |    92.31 |                   |
  index.js         |    92.31 |      100 |    66.67 |    92.31 |                 9 |
-------------------|----------|----------|----------|----------|-------------------|
```
  *	`npm run featuretest` to run feature tests.
```shell
$ npm run featuretest

> reactredux@1.0.0 featuretest C:\Users\paranganat\Desktop\ReactRedux
> nightwatch

Starting selenium server in parallel mode... started - PID:  10916

Started child process for: calc
 calc   Feature: Google Search
 calc
 calc   Scenario: Add
 calc   Given I open app
 calc   √ Element <body> was visible after 58 milliseconds.
 calc   And I see textbox with value "100"
 calc   Then I click add button
 calc   And I see textbox with value "101"
 calc   Then I click add button
 calc   And I see textbox with value "102"
 calc
 calc   Scenario: Sub
 calc   Given I open app
 calc   √ Element <body> was visible after 28 milliseconds.
 calc   And I see textbox with value "100"
 calc   Then I click sub button
 calc   And I see textbox with value "99"
 calc   Then I click sub button
 calc   And I see textbox with value "98"
 calc
 calc   Scenario: Change
 calc   Given I open app
 calc   √ Element <body> was visible after 27 milliseconds.
 calc   And I see textbox with value "100"
 calc   Then I change the text box value to "1000"
 calc   Then I click add button
 calc   And I see textbox with value "1001"
 calc   Then I click sub button
 calc   And I see textbox with value "1000"
 calc
 calc   3 scenarios (3 passed)
19 steps (19 passed)
0m08.620s

  >> calc finished.


INFO Selenium process finished.
```

# Linting
  * JS   - `npm run jslint ` to run jslint
  * JSON - `npm run jsonlint` to run jsonlint
  * Style- `npm run stylelint` to run style-lint.

## Dependencies

- [react](https://ghub.io/react): React is a JavaScript library for building user interfaces.
- [react-bootstrap](https://ghub.io/react-bootstrap): Bootstrap 3 components built with React
- [react-dom](https://ghub.io/react-dom): React package for working with the DOM.
- [react-redux](https://ghub.io/react-redux): Official React bindings for Redux
- [redux](https://ghub.io/redux): Predictable state container for JavaScript apps
- [redux-saga](https://ghub.io/redux-saga): Saga middleware for Redux to handle Side Effects

## Dev Dependencies

- [@babel/cli](https://ghub.io/@babel/cli): Babel command line.
- [@babel/core](https://ghub.io/@babel/core): Babel compiler core.
- [@babel/polyfill](https://ghub.io/@babel/polyfill): Provides polyfills necessary for a full ES2015+ environment
- [@babel/preset-env](https://ghub.io/@babel/preset-env): A Babel preset for each environment.
- [@babel/preset-react](https://ghub.io/@babel/preset-react): Babel preset for all React plugins.
- [@babel/register](https://ghub.io/@babel/register): babel require hook
- [babel-eslint](https://ghub.io/babel-eslint): Custom parser for ESLint
- [babel-loader](https://ghub.io/babel-loader): babel module loader for webpack
- [babel-polyfill](https://ghub.io/babel-polyfill): Provides polyfills necessary for a full ES2015+ environment
- [chai](https://ghub.io/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [chai-enzyme](https://ghub.io/chai-enzyme): Chai.js assertions for enzyme
- [chai-http](https://ghub.io/chai-http): Extend Chai Assertion library with tests for http apis
- [chromedriver](https://ghub.io/chromedriver): ChromeDriver for Selenium
- [css-loader](https://ghub.io/css-loader): css loader module for webpack
- [cucumber](https://ghub.io/cucumber): The official JavaScript implementation of Cucumber.
- [cucumber-pretty](https://ghub.io/cucumber-pretty): Cucumber.js Pretty Formatter
- [enzyme](https://ghub.io/enzyme): JavaScript Testing utilities for React
- [enzyme-adapter-react-16](https://ghub.io/enzyme-adapter-react-16): JavaScript Testing utilities for React
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-plugin-json](https://ghub.io/eslint-plugin-json): Lint JSON files
- [eslint-plugin-react](https://ghub.io/eslint-plugin-react): React specific linting rules for ESLint
- [expect](https://ghub.io/expect): This package exports the `expect` function used in [Jest](https://jestjs.io/). You can find its documentation [on Jest&#39;s website](https://jestjs.io/docs/en/expect.html).
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [extract-text-webpack-plugin](https://ghub.io/extract-text-webpack-plugin): Extract text from bundle into a file.
- [jsdom](https://ghub.io/jsdom): A JavaScript implementation of many web standards
- [jsdom-global](https://ghub.io/jsdom-global): Enable DOM in Node.js
- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework
- [nightwatch](https://ghub.io/nightwatch): Easy to use Node.js based End-to-End testing solution for browser based apps and websites, using the W3C WebDriver API.
- [nightwatch-cucumber](https://ghub.io/nightwatch-cucumber): Nightwatch.js plugin for Cucumber.js
- [node-sass](https://ghub.io/node-sass): Wrapper around libsass
- [nyc](https://ghub.io/nyc): the Istanbul command line interface
- [react-addons-test-utils](https://ghub.io/react-addons-test-utils): This package provides the React TestUtils add-on.
- [redux-test-utils](https://ghub.io/redux-test-utils): Test utils to simplify testing of containers in redux.
- [sass-loader](https://ghub.io/sass-loader): Sass loader for webpack
- [selenium-server](https://ghub.io/selenium-server): Selenium in an npm package
- [style-loader](https://ghub.io/style-loader): style loader module for webpack
- [stylelint](https://ghub.io/stylelint): A mighty, modern CSS linter.
- [stylelint-config-standard](https://ghub.io/stylelint-config-standard): Standard shareable config for stylelint
- [testdouble](https://ghub.io/testdouble): A minimal test double library for TDD with JavaScript
- [uglifyjs-webpack-plugin](https://ghub.io/uglifyjs-webpack-plugin): UglifyJS plugin for webpack
- [webpack](https://ghub.io/webpack): Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.
- [webpack-cli](https://ghub.io/webpack-cli): CLI for webpack &amp; friends

### License
Copyright (c) 2018 Praba Prakash, contributors.

Released under the [MIT license](https://tldrlegal.com/license/mit-license).

Screenshots are [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) (Attribution-ShareAlike)
