import fn1 from "./src/demo1";
import data from "./src/data.json"

// webpack打包
// 开发环境：webpack ./index.js -o ./bundle/main.js --mode=development
// 生产环境：webpack ./index.js -o ./bundle/main.js --mode=production

// webpack可以直接对js,json文件直接进行打包，但对其他文件则需要插件

console.log(fn1(1, 2))
console.log(data, 'data')