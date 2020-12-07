const express =require('express');


const app = express();

// URLエンコードされたデータを解析する
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000);

//CROS設定: 全てのドメインに対して許可 
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);

    //CROS設定: 全てのドメインに対して許可 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //次の処理
    next();
});

//ルーティング
//webルートにリクエストされたらレスポンス
// app.get('/',(req,res) =>{
//     res.send("hello Express!");
// });

app.post('/',(req,res) =>{

    let result = {
        message: req.body.message,
        datetime: new Date(),
    };
    res.send(result);
});

app.post('/purchase', (req, res) => {
    const tax_rate = 0.1;
    const price = req.body.price;
    const amount = req.body.amount;

    const tax = price * amount * tax_rate;
    const excluding_price = price * amount;
    const total_price = excluding_price + tax;

    let result = {
        excluding_price: excluding_price,
        total_price: total_price,
        tax: tax,
    };
        //レスポンス
        res.send(result);
    });


//app.get(URLパス,処理);

//無名関数の書き方
//app.get('/',function(req,res){

//});

app.use(express.static(__dirname + '/public'));

