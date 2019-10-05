# The What

Express server serving a react client via webpack middleware.

## Conception

This app was built following instructions from [webpack's official guides](https://webpack.js.org/guides/) as well as a personal preference for folder structure.

The chapters most thoroughly covered in this version are:

1. [Getting Started](https://webpack.js.org/guides/getting-started/)
2. [Asset Management](https://webpack.js.org/guides/asset-management/)
3. [Output Management](https://webpack.js.org/guides/output-management/)
4. [Development](https://webpack.js.org/guides/development/)
5. [Production](https://webpack.js.org/guides/production/)
6. [Progressive Web Application](https://webpack.js.org/guides/progressive-web-application/)

...essentially, the 'bare bones' required to build a production-ready app.

## NPM Scripts

`npm i`

...I forget this one all the time: when you clone/download a repo, you HAVE to install the packages first..to make the app work.

`npm run wp-static`

Webpack watch mode for changes in /client.

`npm run wp-dev`

Webpack dev mode for hot-reload on changes in /client.

_Recommended for client-only development (for static pages)._

`npm run dev`

Start and watch express server using nodemon and either serve:

- /client via webpack middleware [development], or
- /dist via index.html [production].

_Recommended for server-only development._

`npm run http`

Serve /dist in an http server.

`npm run build`

Bundle /client into /dist with an index.html.

`npm run start`

Start express server using node and either serve:

- /client via webpack middleware [development], or
- /dist via index.html [production].

_Recommended for client-only development (for api-dependent pages)._

## Features

### App

- Scripts for app use in development/production (see npm scripts section above).
- Dotenv for use of environment variables.
- Config folder that hosts anything (constants, conditionals, functions, etc.) required in more than one file. It includes a consolidated path file so that if the directory for a file changes it’ll only have to be updated here, as opposed to wherever it is required.

### React

- Starters include:
  - header component;
  - home page component;
  - 404 page component;
  - themes for root element; and,
  - sass stylesheet.
- Redux, with a store setup that includes:
  - history + connected-react-router for SPA routing;
  - redux-thunk + redux-promise for creating api middleware;
  - redux-devtools, for the use of the extension on Chrome; and,
  - a root reducer with router & client configs preloaded.
- Service worker registration in production.

### Express

- Basic security packages: cors, helmet.
- HistoryApiFallback to allow SPA routing.
- Ready-to-use api route (“/api”) with pre-filled dummy data.
- Ssr middleware that correctly renders client depending on environment.

### Webpack

- Asset bundling support for the following file formats:
  - Javascript: js, jsx.
  - Stylesheets: css, scss, sass.
  - Images: png, svg, jpg, gif.
  - Fonts: woff, woff2, eot, ttf, otf.
  - Data: json, csv, tsv, xml.
- Dev server with settings included:
  - historyApiFallback to allow SPA routing;
  - hot reloading;
  - file compression; and,
  - "port + 1," so that it doesn’t clash with the express server should it also be running.
- Service worker generation in production.
- Source-mapping.
- SplitChunks (vendors) for optimization.
- File name hashing in production.
- HtmlWebpackPlugin for generating an html template.
