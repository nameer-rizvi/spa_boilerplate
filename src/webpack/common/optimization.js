module.exports = {
  moduleIds: "hashed",
  runtimeChunk: "single",
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "all"
      }
    }
  }
};
