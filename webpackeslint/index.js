import add from './src/demo';

console.log(add(1, 2));
console.log('js代码校验，eslint配置');
// js代码校验，在webpack5之前使用的时eslint-loader的方式，webpack5之后，将舍弃loader方式，
// 使用插件的方式，具体使用到的插件如下：
// eslint 基础包
// eslint-webpack-plugin 用于取代eslint-loader
// eslint-config-airbnb-case airbnb是一种校验格式，最为常用；该插件支持es6语法
// eslint-plugin-import 用于在webpack.config.js中读取eslintConfig的配置
