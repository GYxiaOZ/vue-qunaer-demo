const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      // 给 stylus-loader 传递选项
      // stylus: {
      //   data: `src/assets/styles/varibles.styl`
      // },
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
