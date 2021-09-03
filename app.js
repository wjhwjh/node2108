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

 // 允许跨域，允许所有的请求访问，cors同源策略， 后端解决跨域问题
 /*
  使用koa的中简件 koa-cors解决跨域问题
  https://www.cnblogs.com/reeber/p/10727956.html
  https://www.cnblogs.com/lpl666/p/12881119.html
 */
/*
app.use(async(ctx,next=>{
  await ctx.set('Access-Control-Allow-Origin','*'); //允许通过所有的 
  await next();
}));*/
 

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000,()=>{
    console.log("项目启动成功")
})
