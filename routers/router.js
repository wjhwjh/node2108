const Router = require("koa-router")
const router = new Router();
router.get('/', async (ctx) => {
    //ctx.body = "首页";
    await ctx.render("index",{name:"huizi"})
})

router.get('/user', async (ctx) => {
    await ctx.render("list")
})
module.exports = router