
const mongoose = require('mongoose')
// const Role = require('../models/roleModel')
// // create Schema
const ProjetSchema = mongoose.Schema({
    id: {
        type: String,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: String,
        allowNull: false
    },
    title: {
        type: String,
        allowNull: false
    },
    description: {
        type: String,
        allowNull: false
      },
      technologe: {
          type: String,
          allowNull: false
        },
    github: {
        type: String,
        allowNull: false
      },
      dimo: {
        type: String,
        allowNull: false
      }
},
    {
        timestamps:true
    }
)
module.exports = mongoose.model('Projet',ProjetSchema)

