const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        // 'resolve url': true,
        import: [
          path.resolve(__dirname, './src/assets/styles/varibles.styl'),
          path.resolve(__dirname, './src/assets/styles/mixins.styl')
        ]
      }
    }
  }
}
