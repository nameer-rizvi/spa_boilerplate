# ssr_boilerplate

Express app serving react via webpack.

## conception

This app was built following the instructions from [webpack's official guides](https://webpack.js.org/guides/) as well as a personal preference for folder structure.

## scripts

bundle /client into /dist with an index.html.

`npm run build`

webpack watch mode for changes in /client.

`npm run watch`

webpack server mode for hot-reload on changes in /client.

`npm start`

start express server using node and either serve:

- (a) /client via webpack middleware in development/local, or
- (b) /dist via index.html in production.

`npm run server-static`

start and watch express server using nodemon and either serve:

- (a) /client via webpack middleware in development/local, or
- (b) /dist via index.html in production.

`npm run server-watch`

## supported file formats for asset bundling

- javascript: js, jsx
- stylesheets: css, scss, sass
- images: png, svg, jpg, gif
- fonts: woff, woff2, eot, ttf, otf
- data: json, csv, tsv, xml
