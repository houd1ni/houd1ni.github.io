// vue.config.js
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  // options...
  publicPath: '/fela-vue/dist/',
  configureWebpack() {
    return {
      plugins: [
        new MonacoWebpackPlugin()
      ]
    }
  }
}
