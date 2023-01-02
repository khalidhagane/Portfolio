
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const FormationSchema = mongoose.Schema({
    
    title: {
        type: String,
        allowNull: false
    },
    date1: {
        type: String,
        allowNull: false
      },
      date2: {
          type: String,
          allowNull: false
        },
    campo: {
        type: String,
        allowNull: false
      },
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Formation',FormationSchema)