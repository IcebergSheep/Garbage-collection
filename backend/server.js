const express = require('express');
const app = express();
const path = require('path'); 
const http = require('http'); //모름
const fs = require('fs'); //모름

//const index = require('./routes/index'); 

//app.use('/aboutroutes', index);

app.listen(3000,() =>{
    console.log('liten to 3000')
})

app.get('/',(req, res)=>{
    res.render('index',{
        javascriptkey:process.env.javascriptkey
    });
});

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
