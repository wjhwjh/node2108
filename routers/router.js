const Router = require("koa-router")
const router = new Router();
router.get('/', async (ctx) => {
    //ctx.body = "首页";
    await ctx.render("index",{
        name:"huizi",
        islogin:false
    })
})

router.get('user/login', async (ctx) => {
   // await ctx.render("list")
   //ctx.body="{'data':'返回数据'}"
   await ctx.render("component/reglogin");
})

module.exports = router