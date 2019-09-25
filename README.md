# ssr_boilerplate

Express app serving react via webpack.

## conception

This app was built following the instructions from [webpack's official guides](https://webpack.js.org/guides/) as well as a personal preference for folder structure.

## scripts

`npm run build`

bundle /client into /dist with an index.html, using webpack.prod.config.

`npm run watch`

webpack watch mode for changes in /client, using webpack.dev.config.

`npm start`

webpack server mode for hot-reload on changes in /client, using webpack.prod.config.

`npm run server-static`

start express server using node and either serve:

- /client via webpack middleware in development/local, or
- /dist via index.html in production.

`npm run server-watch`

start and watch express server using nodemon and either serve:

- /client via webpack middleware in development/local, or
- /dist via index.html in production.

`npm run server-http`

serve /dist in an http server.

## supported file formats for asset bundling

- javascript: js, jsx
- stylesheets: css, scss, sass
- images: png, svg, jpg, gif
- fonts: woff, woff2, eot, ttf, otf
- data: json, csv, tsv, xml
