const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('myTable', signUpTemplate)