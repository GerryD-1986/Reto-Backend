const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  titulo:{
    type: String,
    required:true,
    maxLength: 100
  },
  artista:{
    type: String,
    required:true,
    maxLength: 100
  },
  genero:{
    type: String,
    required: true,
  },
  precio:{
     type:Boolean,
     required: true,
  },
  existencias:{
    type:Boolean,
    required: false
  },
});

module.exports = mongoose.model('album', schema);