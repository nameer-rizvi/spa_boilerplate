# SERVER-SIDE-RENDERING BABY

Express server serving a react client via webpack middleware.

### 100% Control [THE HOT SAUCE]

The app includes a shared folder that hosts anything (constants, functions, conditionals, etc.) required in more than one file. This is the biggest advantage offered by this boilerplate. Unlike create-react-app or gatsby, the app doesn't require a dirty ejection to share things between the client and server. Here, you can seamlessly do such things as share validations on both ends using a single file; which significantly decreases double-code and maintenance-headaches and increases dev-life satisfaction. This is especially helpful for apps that feature a circular flow via REST api's (aka. CRUD operations, forms, validations, etc.).

There's already some shared settings included in the /src/shared/index.js file to demonstrate this, such as a simple share of the app name between the webpack html generator and the react app. Another example is the consolidated path file, so that if the directory for a file changes it’ll only have to be updated here, as opposed to wherever it is required in the client, server or webpack middleware.

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

## Get Started

- If you have a github account, the "Use this template" option is available (the nice and green button above). This is the recommended method as it will easily transfer the boilerplate to your library of repo's without any further config.

Otherwise, in your terminal / command line, you can change into the directory where you'd like to install the repo and...

1. Clone the repo: `git clone https://github.com/nameer-rizvi/ssr_boilerplate.git`

2. Cd into the repo: `cd ssr_boilerplate/`

3. Remove the remote reference to origin OR set it to your new github repo: `git remote remove origin` OR `git remote set-url origin git://new.url.here`

4. Install all the required npm packages listed in package.json: `npm install`

5. Start the dev server: `npm run dev`

VOILA! Easy-peezy!

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

- Scripts (see npm scripts section above).
- Dotenv for use of environment variables.

### React

- Starters include:
  - header component;
  - home page component;
  - 404 page component;
  - sass stylesheet;
  - initial get function in app.js to fetch data (via axios) from the api endpoint; and,
  - sample state/hook in app.js.
- Redux, with a store setup that includes:
  - history + connected-react-router for SPA routing;
  - redux-thunk + redux-promise for creating api middleware;
  - redux-devtools for the use of the extension on Chrome; and,
  - a root reducer with connectRouter added for routing purposes.
- Service worker registration in production.
- [Styled icons](https://styled-icons.js.org/).

### Express

- Basic security packages: cors, helmet.
- HistoryApiFallback to allow SPA routing.
- Ready-to-use api route (“/api”) with pre-filled dummy data.
- SSR middleware that correctly renders client depending on environment.

### Webpack

- Asset bundling support for the following file formats:
  - Javascript: js, jsx;
  - Stylesheets: css, scss, sass;
  - Images: png, svg, jpg, gif;
  - Fonts: woff, woff2, eot, ttf, otf; and,
  - Data: json, csv, tsv, xml.
- Dev server with the following settings:
  - historyApiFallback to allow SPA routing;
  - hot reloading; and,
  - file compression.
- Source-mapping.
- SplitChunks (vendors) for optimization.
- File name hashing in production.
- Plugin for generating service worker in production.
- HtmlWebpackPlugin for generating an html template (favicon included).
