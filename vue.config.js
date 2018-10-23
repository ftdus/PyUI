const path = require('path');
const webpackDocConfig = require('./build/webpack.docs');
const webpackMain = require('./build/webpack.main');

module.exports = {
  configureWebpack: config => {
    // let webpackConfig;
    // console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

    // if (process.env.NODE_ENV === 'production') {
    //   // 为生产环境修改配置...
    //   webpackConfig = {};
    // } else {
    //   console.log(config);
    //   // 为开发环境修改配置...
    //   webpackConfig = websiteConfig;
    // }
    // return webpackConfig
    return webpackMain;
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(webpackDocConfig);
  },
  outputDir: path.resolve(process.cwd(), './website/dist/'),
  baseUrl: process.env.CI_ENV || '',
};
