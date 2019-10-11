const Sql = require('../lib/mysql');
const tbName = 'admin';
async function admin(ctx,next){
    //处理请求request
    let data = await Sql.queryAll(tbName);
    //处理响应response
    ctx.body=data
}
  module.exports = admin