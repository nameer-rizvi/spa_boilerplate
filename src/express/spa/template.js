const { browser, origin } = require("../../shared/index");

module.exports = `<!DOCTYPE html>
<html
  style="min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;"
>
  <head>
    <title>[server]</title>
  </head>
  <style>
    body {
      max-width: 700px;
      padding: 40px;
      ${browser.props.style}
    }
    a {
      color: ${browser.props.theme_color};
    }
  </style>
  <body>
    <h1>
      [404] Server can't GET through browser's window (via url) because the app
      is using the historyApiFallback module.
    </h1>
    <h2>
      This is a package required for developing an spa (single-page
      application).
    </h2>
    <h3>
      For more information, please see the module's
      <a
        href="https://github.com/bripkens/connect-history-api-fallback/blob/master/README.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        github readme
      </a>
      or
      <a
        href="https://www.npmjs.com/package/connect-history-api-fallback"
        target="_blank"
        rel="noopener noreferrer"
      >
        npm page</a
      >.
    </h3>
    <p style="line-height: 20px;">
      A temporary solution is to comment the line in /src/server/index.js that
      contains 'app.use(historyApiFallback())'. You should then be able to hit
      the route and see the intended result. It is not recommended, but if done,
      please don't forget to uncomment the line before working on the front-end
      or deploying the app...otherwise there'll most likely be issues with the
      react-router for client-side-routing.
    </p>
    <br />
    <br />
    <a href="${origin}" target="_blank" rel="noopener noreferrer"
      >Click here to open the react application on the client port.</a
    >
  </body>
</html>
`;
