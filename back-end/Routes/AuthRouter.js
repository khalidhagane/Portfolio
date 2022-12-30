const express = require('express');
const router = express.Router() 
const {Login,Register,Forgetpassword,Resetpassword,verificationEmail} = require('../Controllers/AuthController') 


router.post('/login',Login);
router.post('/register',Register);
router.post('/forgetpassword',Forgetpassword);
router.post('/resetpassword/:token',Resetpassword);
router.get('/verifieremail/:token',verificationEmail);


module.exports = router;