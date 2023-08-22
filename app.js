const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use("/admin",adminRoutes);

app.use("/shop",shopRoutes);

app.get("/",(req,res,next) => {
    res.send('<h1 >Hello from Express </h1>');
});

app.use((req,res,next)=>{
    res.status(404).send('<h1>There is Some ERROR IN LOADING</h1>');
});

app.listen(4000);




// app.use((req,res,next) => {
//     console.log('in the middleware');
//     next();// this allows request to continue to the next middleware in line 
// });