const Koa = require("koa") 
//const pug = require("pug")
//const Router = require("koa-router")
const static = require("koa-static")
const views = require("koa-views")
const path = require("path")
const mongoose = require("mongoose")
const logger = require("koa-logger")
const router = require("./routers/router.js")
 
 

const app = new Koa()
app.use(logger())
 
console.log('路径',__dirname,path.join(__dirname,'public'))

// 处理静态文件
app.use(static(path.join(__dirname,'public')))

app.use(views(path.join(__dirname,'views'), {
    extension: 'pug'
}));

 
 

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000,()=>{
    console.log("项目启动成功")
})
