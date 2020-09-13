const path = require('path')
module.exports = {
  devServer: {
    port: 9527,
    open: true,
    proxy:{
      '/commer':{
        target:'https://api.it120.cc',
        ws:false,
        changeOrigin: true,
        pathRewrite:{
          '^/commer':'/commer'
        }
      }
    }
  },
  lintOnSave: false,

}
