# ssr_boilerplate

Express app serving react via webpack.

## conception

This app was built following instructions from [webpack's official guides](https://webpack.js.org/guides/) as well as a personal preference for folder structure.

The chapters most thoroughly covered in this version are:

1. [Getting Started](https://webpack.js.org/guides/getting-started/)
2. [Asset Management](https://webpack.js.org/guides/asset-management/)
3. [Output Management](https://webpack.js.org/guides/output-management/)
4. [Development](https://webpack.js.org/guides/development/)
5. [Production](https://webpack.js.org/guides/production/)
6. [Progressive Web Application](https://webpack.js.org/guides/progressive-web-application/)

...essentially, the 'bare bones' required to build a production-ready app.

## npm scripts

`npm run build`

bundle /client into /dist with an index.html.

`npm run wp-static`

webpack watch mode for changes in /client.

`npm run wp-dev`

webpack server mode for hot-reload on changes in /client.

_recommended for client-only development (for static pages)_

`npm run static`

start express server using node and either serve:

- /client via webpack middleware [development], or
- /dist via index.html [production].

_recommended for client-only development (for api-dependent pages)_

`npm run dev`

start and watch express server using nodemon and either serve:

- /client via webpack middleware [development], or
- /dist via index.html [production].

_recommended for server-only development_

`npm run http`

serve /dist in an http server.

## supported file formats for asset bundling

- javascript: js, jsx
- stylesheets: css, scss, sass
- images: png, svg, jpg, gif
- fonts: woff, woff2, eot, ttf, otf
- data: json, csv, tsv, xml
