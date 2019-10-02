module.exports = {
  title: "ssr",
  favicon: null,
  meta: {
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    "theme-color": "#ffffff",
    description: "Express app serving react via webpack.",
    robots: "index,follow",
    googlebot: "index,follow"
  },
  minify: process.env.NODE_ENV === "production" ? true : false,
  hash: false,
  cache: true
};
