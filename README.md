# SERVER-SIDE-RENDERING BABY 👶

[Express](https://expressjs.com/) server serving a [react](https://reactjs.org/) client via [webpack](https://webpack.js.org/) middleware.

### 100% Control [THE HOT SAUCE]

The app includes a [shared folder](https://github.com/nameer-rizvi/ssr_boilerplate/tree/master/src/shared) that hosts anything (constants, functions, middleware, etc.) required in more than one file. This is the biggest advantage offered by this boilerplate. Unlike [create-react-app](https://github.com/facebook/create-react-app) or [gatsby](https://www.gatsbyjs.org/), the app doesn't require a dirty ejection to share things between the client and server ([Adam Laycock explains why ejecting can be 🆖](https://medium.com/curated-by-versett/dont-eject-your-create-react-app-b123c5247741)). Here, you can seamlessly do such things as share validations on both ends using a single file; which significantly decreases double-code and maintenance-headaches and increases dev-life satisfaction. This is especially helpful for apps that feature a circular flow via REST api's (aka. CRUD operations, forms, validations, etc.).

There's already some settings included in the [shared index file](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/shared/index.js) to demonstrate this, such as a simple share of the app name between the [webpack html generator](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/webpack/html/index.js) and the [react header component](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/components/header.js). Another example is the [consolidated path file](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/shared/path.js), so that if the directory for a file changes it’ll only have to be updated here, as opposed to wherever it is required in the client, server or webpack middleware. There's also a [logging function](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/shared/log.js) for consistent formatting across the app.

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
$ git clone https://github.com/nameer-rizvi/ssr_boilerplate.git
$ cd ssr_boilerplate/
$ git remote remove origin
$ npm install
$ npm run dev
```

🎉

## NPM Scripts

`npm run wp-dev`

Run webpack's dev server for hot-reload on changes in /client.

_Recommended for front-end-only development._

`npm run server`

Start & watch the express server using nodemon.

_Recommended for back-end-only development._

`npm run dev`

Concurrently start & watch the express and webpack servers on separate ports.

_Recommended for full-stack development._

`npm run build`

Bundle /client into /dist with an index.html.

`npm start`

Start express server using node.

`npm run demo`

Start express server using node and serve static assets in /dist via index.html. NOTE: NODE_ENV must be set to production before running script to view app.

_Recommended for viewing prod-version of app prior to deployment._

**If the cloud platform you choose to deploy with doesn't already read the 'build' and/or 'start' scripts, it is recommended you check the platform's documentations in order to learn how to run a "production" script that may go something like "npm i && npm run build && npm run start". Also, don't forget to change or set the NODE_ENV to "production" either through the platform's GUI or console before deployment.**

## Features

### App

- [NPM scripts](https://docs.npmjs.com/misc/scripts) (see npm scripts section above).
- [Dotenv](https://www.npmjs.com/package/dotenv) for use of environment variables.

**Please note that environment variables aren't accessible in the front-end, for security reasons. [Create-react-app](https://create-react-app.dev/docs/adding-custom-environment-variables/) does an excellent job of explaining why, but the gist of it is this:**

> Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.

**If, for any reason, environment variables are required in the front-end, two recommended alternatives are webpack's [Environment Plugin](https://webpack.js.org/plugins/environment-plugin/) or the third-party [DotenvPlugin (dotenv-webpack)](https://github.com/mrsteele/dotenv-webpack).**

### React

- Starters include:
  - [header component](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/components/header.js);
  - [home page component](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/components/main/home.js);
  - [404 page component](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/components/main/404.js);
  - [sass stylesheet](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/style.scss);
  - initial get function in [app.js](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/components/app.js) to fetch data (via [axios](https://www.npmjs.com/package/axios)) from the api endpoint; and,
  - sample state/hook in [app.js](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/components/app.js).
- Redux, with a [store](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/redux/store.js) setup that includes:
  - [history](https://www.npmjs.com/package/history) + [connected-react-router](https://github.com/supasate/connected-react-router) for SPA routing;
  - [redux-thunk](https://www.npmjs.com/package/redux-thunk) + [redux-promise](https://www.npmjs.com/package/redux-promise-middleware) for creating api middleware;
  - [redux-devtools](https://github.com/zalmoxisus/redux-devtools-extension) for the use of the [extension on Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en); and,
  - a [root reducer](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/redux/reducer.js) with connectRouter added for routing purposes.
- [Service worker](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/react/serviceWorker.js) registration in production.
- [Styled components](https://www.styled-components.com/) and [styled icons](https://styled-icons.js.org/).

### Express

- Basic security packages: [cors](https://www.npmjs.com/package/cors), [helmet](https://www.npmjs.com/package/helmet).
- [HistoryApiFallback](https://www.npmjs.com/package/connect-history-api-fallback) to allow SPA routing.
- Ready-to-use [api route (“/api”)](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/express/api.js) with pre-filled dummy data.
- [SSR middleware](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/express/ssr/index.js) that correctly renders client depending on environment.

### Webpack

- Asset bundling support for the following file formats:
  - Javascript: js, jsx;
  - Stylesheets: css, scss, sass;
  - Images: png, svg, jpg, gif;
  - Fonts: woff, woff2, eot, ttf, otf; and,
  - Data: json, csv, tsv, xml.
- [Dev server](https://github.com/nameer-rizvi/ssr_boilerplate/blob/master/src/webpack/dev.js) with the following settings:
  - [historyApiFallback](https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback) to allow SPA routing;
  - [hot reloading](https://webpack.js.org/configuration/dev-server/#devserverhot); and,
  - [file compression](https://webpack.js.org/configuration/dev-server/#devservercompress).
- [Source-mapping](https://webpack.js.org/configuration/devtool/).
- [SplitChunks](https://webpack.js.org/plugins/split-chunks-plugin/) (vendors) for optimization.
- File name hashing in production.
- Plugin for generating [service worker](https://webpack.js.org/guides/progressive-web-application/) in production.
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) for generating an html template (favicon included).
