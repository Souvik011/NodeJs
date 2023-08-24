const path =  require('path');

const rootDir = require('../util/path');

exports.getContactForm = (req,res,next) => {
    res.sendFile(path.join(rootDir,'Views','contact.html'));
};

exports.postContactForm = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','success.html'));
};