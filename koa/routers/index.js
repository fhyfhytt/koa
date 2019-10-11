const router = require('koa-router')();   //路由

const admin=require("../controllers/admin")

// router.get("/app",async function(ctx,next){
//     let data = await Sql.queryAll(tbName);
//     ctx.body=data
// })
router.get("/app",admin)
module.exports=router