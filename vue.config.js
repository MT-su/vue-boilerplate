const path = require('path')
const {
  PROJECT_NAME,
  PUBLIC_PATH,
  OUTPUT_DIR,
  ASSETS_DIR,
  FILENAME_HASHING,
  PRODUCTION_SOURCE_MAP,
  PORT
} = process.env

function resolve (dir) {
  return path.join(__dirname, dir)
}

function convertnNumStrToBool (numStr) {
  return !!(+numStr)
}

module.exports = {
  // 静态资源域名
  publicPath: PUBLIC_PATH === '/' ? PUBLIC_PATH : PUBLIC_PATH + PROJECT_NAME,

  // 打包后文件目录
  outputDir: OUTPUT_DIR,

  // 打包后静态文件目录
  assetsDir: ASSETS_DIR,

  // 打包后静态文件名是否包含哈希值
  filenameHashing: convertnNumStrToBool(FILENAME_HASHING),

  // source map
  productionSourceMap: convertnNumStrToBool(PRODUCTION_SOURCE_MAP),

  configureWebpack: config => ({
    optimization: {
      runtimeChunk: {
        name: 'runtime'
      }
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        src: resolve('src'),
        assets: resolve('src/assets'),
        config: resolve('src/config'),
        lib: resolve('src/lib')
      }
    },
    devtool: false
  }),

  devServer: {
    port: PORT,
    proxy: {
      '/api': {
        target: 'https://movie.querydata.org',
        changeOrigin: true
      }
    },
    progress: false
  }
}
