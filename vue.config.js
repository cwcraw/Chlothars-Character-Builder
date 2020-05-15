module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    proxy: "http://localhost:4000" //originally 9000
  }
};
