const Bundler = require('parcel-bundler');
const app = require('express')();

const file = './src/index.html'; // 传入一个绝对路径，作为入口文件
const options = {}; // 有关 options 的具体配置，请参考 api 文档

// 使用 file 和 options 参数，初始化新的 bundler
const bundler = new Bundler(file, options);

// 让 express 使用 bundler 中间件，这将让 parcel 处理你 express 服务器上的每个请求
app.use(bundler.middleware());

// 监听 8080 端口
app.listen(8080);