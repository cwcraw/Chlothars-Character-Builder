module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    proxy: "http://localhost:4001" //originally 9000
  }
};
