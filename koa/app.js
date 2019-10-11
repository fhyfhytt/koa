//启动文件（入口文件）
const Koa = require('koa');
const bodyParser  = require('koa-bodyparser');   //上下文解析
const static = require('koa-static');    //静态资源服务
const path = require('path');
const cors = require('koa-cors');      //跨域访问组件
const registerRouter = require('./routers/compose');
// const koaBody = require('koa-body'); //上传文件
const app = new Koa();
const config=require("./config/default")
require('./lib/createTable');
// 配置静态资源文件
const  staticPath = './static';
app.use(static(
    path.join(__dirname,staticPath)
))
app.use(bodyParser())
app.use(registerRouter())
app.use(cors())

app.listen(config.port)
console.log("启动成功 koa is listening in "+config.port);