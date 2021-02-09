const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let addressSchema = new Schema({
    userid: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },

    state: {
        type: String,
    },
    country: {
        type: String,
    },
    home: {
        type: String,

    },
    lat: {
        type: Number,

    }
    ,
    lang: {
        type: Number
    }

});


