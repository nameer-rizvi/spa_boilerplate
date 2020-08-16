# SPA BOILERPLATE TEMPLATE 👶

[Express](https://expressjs.com/) server serving a [react](https://reactjs.org/) client via [webpack](https://webpack.js.org/) middleware.

### Complete Harmony

With all three parts of the application hosted within the [/src folder](https://github.com/nameer-rizvi/spa_boilerplate/tree/master/src), one can share anything between them. The structure of the project is such that anything specific to a part can be contained within its respective folder while anything that might be shared between two or more parts can be kept within the [shared folder](https://github.com/nameer-rizvi/spa_boilerplate/tree/develop/src/shared). This may include anything such as constants, functions, middleware, etc. Here, you can seamlessly do such things as share validations between the back-end and front-end using a single module; which significantly decreases double-code and maintenance-headaches and increases dev-life satisfaction. This is especially helpful for apps that feature a circular flow via REST api's (aka. CRUD operations, forms, validations, etc.).

## Table of Contents

1. [Blurb](#blurb)
2. [Getting Started](#getting%20started)
3. [NPM Scripts](#npm%20scripts)
4. [Features](#features)
   1. [App (note on env variables)](#app)
   2. [React](#react)
   3. [Express](#Express)
   4. [Webpack](#Webpack)

## Blurb

This app was built following instructions from [webpack's official guides](https://webpack.js.org/guides/) as well as a personal preference for folder structure.

The chapters most thoroughly covered in this version are:

1. [Getting Started](https://webpack.js.org/guides/getting-started/)
2. [Asset Management](https://webpack.js.org/guides/asset-management/)
3. [Output Management](https://webpack.js.org/guides/output-management/)
4. [Development](https://webpack.js.org/guides/development/)
5. [Production](https://webpack.js.org/guides/production/)
6. [Progressive Web Application](https://webpack.js.org/guides/progressive-web-application/)

...essentially, the 'bare bones' required to build a production-ready app.

## Getting Started

If you have a github account, the [Use this template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) option is available (the nice and green button above). This is the recommended method as it will easily transfer the boilerplate to your library of repo's without any further config.

Otherwise, in your terminal / command line:

```
$ cd [DIRECTORY TO HOST REPO]
$ git clone https://github.com/nameer-rizvi/spa_boilerplate.git
$ cd spa_boilerplate/
$ git remote remove origin
$ npm install
$ npm run dev
```

🎉

## NPM Scripts

`npm run lint`

Run ESLint on all javascript files and return a report on syntax warnings/errors.

_Recommended for maintaining code quality._

**Though ESLint is enabled to run on webpack's dev server, it won't catch syntax errors outside of the react app, as such, it is helpful to run lint throughout the app lest there be unknown errors in the express, shared, or webpack folders.**

`npm run wp-dev`

Run webpack's dev server for hot-reload on changes in /client.

_Recommended for front-end-only development._

`npm run server`

Start & watch the express development server using nodemon.

_Recommended for back-end-only development._

`npm run dev`

Concurrently start & watch the express and webpack servers on separate ports.

_Recommended for full-stack development._

`npm run build`

Bundle /client into /dist with an index.html.

`npm start`

Start express production server using node.

`npm run app`

Start express server using node and serve static assets in /dist via index.html.

_Recommended for viewing prod-version of app prior to deployment._

**If the cloud platform you choose to deploy with doesn't already read the 'build' and/or 'start' scripts, it is recommended you check the platform's documentations in order to learn how to run a "production" script that may go something like "npm i && npm run build && npm run start".**

## Features

### App

- [NPM scripts](https://docs.npmjs.com/misc/scripts) (see npm scripts section above).
- [Dotenv](https://www.npmjs.com/package/dotenv) for use of environment variables.

**Please note that environment variables aren't accessible in the front-end, for security reasons. [Create-react-app](https://create-react-app.dev/docs/adding-custom-environment-variables/) does an excellent job of explaining why, but the gist of it is this:**

> Environment variables are embedded into the build, meaning anyone can view them by inspecting an app's files.

**If, for any reason, environment variables are required in the front-end, two recommended alternatives are webpack's [Environment Plugin](https://webpack.js.org/plugins/environment-plugin/) or the third-party [DotenvPlugin (dotenv-webpack)](https://github.com/mrsteele/dotenv-webpack).**

### React

- Starters include:
  - [page component](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/react/App/Page.js);
  - [theme provider](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/react/App/Theme.js);
  - initial [get function](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/react/app/proxy.js) in Page.js to fetch data from the api endpoint.
- Redux, with a [store](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/react/setup/store.js) setup that includes:
  - [history](https://www.npmjs.com/package/history) + [connected-react-router](https://github.com/supasate/connected-react-router) for SPA routing;
  - [redux-thunk](https://www.npmjs.com/package/redux-thunk) + [redux-promise](https://www.npmjs.com/package/redux-promise-middleware) for creating api middleware;
  - [redux-devtools](https://github.com/zalmoxisus/redux-devtools-extension) for the use of the [extension on Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en); and,
  - a [root reducer](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/react/setup/reducer.js) with connectRouter added for routing purposes.
- [Service worker](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/react/setup/serviceWorker.js) registration in production.
- [Styled components](https://www.styled-components.com/) and [styled icons](https://styled-icons.js.org/).

### Express

- Basic security packages: [cors](https://www.npmjs.com/package/cors), [helmet](https://www.npmjs.com/package/helmet).
- [HistoryApiFallback](https://www.npmjs.com/package/connect-history-api-fallback) to allow SPA routing.
- Ready-to-use [api route (“/api”)](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/express/api.js) with pre-filled dummy data.
- [SPA middleware](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/express/spa/index.js) that correctly renders client depending on environment.

### Webpack

- Asset bundling support for the following file formats:
  - Javascript: js, jsx;
  - Stylesheets: css, scss, sass;
  - Images: png, svg, jpg, gif;
  - Fonts: woff, woff2, eot, ttf, otf; and,
  - Data: json, csv, tsv, xml.
- [Dev server](https://github.com/nameer-rizvi/spa_boilerplate/blob/develop/src/webpack/dev.js) with the following settings:
  - [historyApiFallback](https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback) to allow SPA routing;
  - [hot reloading](https://webpack.js.org/configuration/dev-server/#devserverhot),
  - [file compression](https://webpack.js.org/configuration/dev-server/#devservercompress); and,
  - [eslint](https://eslint.org/).
- [Source-mapping](https://webpack.js.org/configuration/devtool/).
- [SplitChunks](https://webpack.js.org/plugins/split-chunks-plugin/) (vendors) for optimization.
- File name hashing in production.
- Plugin for generating [service worker](https://webpack.js.org/guides/progressive-web-application/) in production.
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) for generating an html template (favicon included).
- [Manifest.json](https://developers.google.com/web/fundamentals/web-app-manifest) in production for PWA capabilities.
