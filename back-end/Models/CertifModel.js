
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const CertifSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    image: {
        type: String,
        allowNull: false
    },
    title: {
        type: String,
        allowNull: false
    },
    _id: {
        type: String,
        allowNull: false
      },
      date: {
          type: String,
          allowNull: false
        },
   
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Certifs',CertifSchema)

