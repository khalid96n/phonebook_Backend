const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PhonebookModel =  require('./model/Phonebook');

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/practice")



app.post('/addContact', (req,res)=>{
     PhonebookModel.create(req.body)
    .then(contacts=>res.json(contacts))
    .catch(err=>res.json(err))
})

app.get("/",(req,res)=>{
    PhonebookModel.find({})
    .then(contacts=>res.json(contacts))
    .catch(err=>res.json(err))
})

app.get("/getContact/:id", (req,res)=>{
    const id = req.params.id
    PhonebookModel.findById({_id:id})
    .then(contacts=>res.json(contacts))
    .catch(err=>res.json(err))
})

app.put("/updateContact/:id",(req,res)=>{
    const id = req.params.id
    PhonebookModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        phone:req.body.phone
    })
    .then(contacts=>res.json(contacts))
    .catch(err=>res.json(err))
})

app.delete("/deleteContact/:id",(req,res)=>{
    const id = req.params.id
    PhonebookModel.findByIdAndDelete({_id:id})
    .then(contacts=>res.json(contacts))
    .catch(err=>res.json(err))
})



app.listen(3031,()=>{
    console.log("Server Started");
})