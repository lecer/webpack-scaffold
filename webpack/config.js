const process = require('process');
const rootPath = process.cwd();
const util = require('./util.js');
const glob = require('glob');
const path = require('path');

let defaultSetting = {
  entry: rootPath + '/src/js/',
  output: rootPath + '/dist/',
  publicPath: '/dist/', //publicPath 本地开发，文件引用路径
  author: 'jay',
  rootPath: rootPath,
  env: process.env.NODE_ENV,
  purifyCssPaths: glob.sync(path.join(rootPath, '/index.html')),
  copyLibs: ['validator', 'swiper', 'jquery'],
  mainJs: rootPath + '/src/js/app.js',
  lessPath: rootPath + '/src/less/',
};

let settingPath = rootPath + process.env.settingPath;

if (util.fsExistsSync(settingPath)) {
  let setting = require(settingPath);
  defaultSetting = Object.assign(defaultSetting, setting);
}

module.exports = defaultSetting;