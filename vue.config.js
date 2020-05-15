module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    proxy: "http://localhost:9000"
  }
};
