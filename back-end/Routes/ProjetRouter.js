const express = require('express');
const router = express.Router();
const {addProjet,updateProjet,deleteProjet, getOneProjet, getAllProjet} = require('../Controllers/ProjetController');
const {upload} = require('../Middlewares/imageMiddleware')

router.post('/addprojet',upload,addProjet)
router.put('/updateprojet',upload,updateProjet)
router.delete('/deleteprojet',deleteProjet)
router.get('/getoneprojet',getOneProjet)
router.get('/getallprojet',getAllProjet)







module.exports = router 