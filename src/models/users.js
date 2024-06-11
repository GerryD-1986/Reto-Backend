const mongoose = require("mongoose");


const modelName = 'users';

const schema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        maxLenght:100
    },
    lastName:{
        type:String,
        required: false,
        maxLenght: 100
    },
    email:{
        type:String,
        required:true,
        match:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password:{
        type:String,
        required:true,
    },
    album:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "album",
    },
    orden:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orden",
    },
    birthDate:{
        type:Date,
        required:false
    },
});

const model = mongoose.model(modelName, schema);

module.exports = model;