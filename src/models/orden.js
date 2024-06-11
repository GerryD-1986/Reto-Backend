const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    numOrden:{
        type: Number, 
        required: true,
        min: 1,
        max: 5000
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('orden', schema);