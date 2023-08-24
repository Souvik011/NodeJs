const express = require('express');

const path =  require('path');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/contactus',contactController.getContactForm);


router.post('/success',contactController.postContactForm);

module.exports = router;