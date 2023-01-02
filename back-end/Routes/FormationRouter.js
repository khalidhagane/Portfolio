const express = require('express');
const router = express.Router();
const {addFormation,updateFormation,deleteFormation, getOneFormation, getAllFormation} = require('../Controllers/FormationController');
// const {upload} = require('../Middlewares/imageMiddleware')

router.post('/addformation',addFormation)
router.put('/updateformation/:id',updateFormation)
router.delete('/deleteformation/:id',deleteFormation)
router.get('/getoneformation/:id',getOneFormation)
router.get('/getallformation',getAllFormation)



module.exports = router 