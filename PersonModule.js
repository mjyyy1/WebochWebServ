const mongoose = require('mongoose');

const pesonSchema = new mongoose.Schema({

    name:String,
    email:String,
    age:Number

})

const Person = mongoose.model('Person',pesonSchema);