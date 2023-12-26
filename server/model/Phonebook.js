const mongoose = require('mongoose')

const PhonebookSchema = new mongoose.Schema({
    name : String,
    phone : Number
})

const PhonebookModel = mongoose.model("contacts",PhonebookSchema)   // here we are creating collection with name of contacts
module.exports= PhonebookModel