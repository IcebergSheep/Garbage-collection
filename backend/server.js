// Express, mysql, body-parser 
// npm install
//$ mkdir nodejs-express-mysql
//$ cd nodejs-express-mysql
//$ npm install express mysql body-parser --save


//기본 세팅
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//
app.get("/", (req, res)=>{
    res.render('index.js');
});

// 포트넘버 설정
app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})
