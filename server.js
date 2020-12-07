const express =require('express');

const app = express();

app.listen(3000);

//ルーティング
//webルートにリクエストされたらレスポンス
app.get('/',(req,res) =>{
    res.send("hello Express!");
});

//app.get(URLパス,処理);

//無名関数の書き方
//app.get('/',function(req,res){

//});