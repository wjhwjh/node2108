console.log('启动一个项目');
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
 
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbkoa = db.db("koa");
    // dbase.createCollection('user', function (err, res) {
    //     if (err) throw err;
    //     console.log("创建集合!");
    //     db.close();
    // });
    var myobj = { name: "菜鸟教程", id: "www.runoob" };
    dbkoa.collection("user").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});*/

/* 
用户的表 user

文章表 article

评论表 comment

分页

发表文章

*/
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/koa',{useNewUrlParser:true,useUnifiedTopology: true})
let db = mongoose.connection;

//如果连接成功会执行error回调
db.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
//如果连接成功会执行open回调
db.on("open", function () {
    console.log("数据库连接成功");
});

// 增 删 查 改
let testShame = new mongoose.Schema({
    title:String,
    createTime:{ type:Date, default:Date.now },
    author:String,
    type:String,
    commentnum:Number,
    content:String

});


let TestModel=mongoose.model("testdb",testShame);

let testEntity = new TestModel({
    title:"文章标题11111",
    author:"huizi",
    type:"技术",
    commentnum:0,
    connect:"文章内容"
})

// 保存数据
// testEntity.save(function(error,doc){
//     if(error){
//         console.log("存储失败")
//     }else{
//         console.log(doc)
//     }
// })

// TestModel.remove({author:'huizi'},function(error,docs){
//     console.log(docs)
// })

// 删除一条数据
// TestModel.deleteOne({ title: '文章标题11111' }, function (err) {
//    if(err){
//        console.log("删除失败")
//     }else{
//         console.log("删除成功")
//     }

// });

// 删除一个数据库
// TestModel.remove(function(err){
//     if(err){
//         console.log("删除失败")
//      }else{
//          console.log("删除成功")
//      }
// })