const express = require("express");
 require('dotenv').config()
const connectDB = require('./config/configdb')
const app = express();
const cookie = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const {Register}= require('./Controllers/AuthController')


app.use(cors({origin:true, credentials:true}))
app.use(cookie())
app.use(express.json())
app.use(express.urlencoded({extended:true }))
connectDB();

const routerAuth = require('./Routes/AuthRouter')
const routerFormation = require('./Routes/FormationRouter')
const routerProjet = require('./Routes/ProjetRouter')


// const routerManager =  require('./routers/managerRoute')
// const routerLivreur =  require('./routers/livreurRoute')
// const routerClient =  require('./routers/clientRoute')
const {errorHandler} = require('./middlewares/errorMiddleware')

app.use('/api/auth',routerAuth)
app.use('/api/formation',routerFormation)
app.use('/api/projet',routerProjet)
// app.use('/api/user',routerClient)
app.use(errorHandler)
app.use(express.static('public'))


const port = process.env.PORT || 3000
 app.listen(port,(err)=>{
    if(!err){
    console.log(`server running on port ${port}`)
}else {
    console.log(err)
}
})


Register()
module.exports= app