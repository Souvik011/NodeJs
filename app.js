const http = require('http');
const path =  require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');
const contactRoutes = require('./Routes/contact');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'Public')));

app.use(adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'Views','404.html'));
});

app.listen(4000);




// app.use((req,res,next) => {
//     console.log('in the middleware');
//     next();// this allows request to continue to the next middleware in line 
// });