const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req,res,next) => {
//     console.log('in the middleware');
//     next();// this allows request to continue to the next middleware in line 
// });
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',(req,res,next)=>{
    // console.log("this always continues");
    next();
});
app.use('/add-product',(req,res,next) => {
    // console.log('in the ADD PRODUCT');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">ADD PRODUCT</button></form>');
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res,next) => {
    // console.log('in the middleware 2');
    res.send('<h1 >Hello from Express </h1>');
});

app.listen(4000);