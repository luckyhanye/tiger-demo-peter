var express=require('express')
var app=express()

app.use(express.static('build'));

app.get('*',function(req,res){
  res.sendFile('index.html',{root:'build'})
})

// app.get('/users/:id', function(req, res){       //res 负责把数据发送给前台的，req 接受前台发过来的请求
//   // console.log(req.params.id);
//   User.findById(req.params.id,function(err, user) {
//     // console.log(user);
//     res.json(user);
//   })
// })
// exports.del = function (req,res) {
//   // console.log(req.query);
//   var id = req.query.id;
//   if (id) {
//     Cat.remove({_id: id}, function (err,category) {
//       if (err) return res.status(400).json({msg:'删除分类失败，请重试'});
//       res.json({
//         msg: '删除成功'
//       })
//     })
//   }else {
//     res.status(400).json({msg:'请求失败'})
//   }
// }


app.listen(8080,function(err){
  console.log('Listening at http://localhost:8080');
})
