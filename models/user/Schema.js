const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// User Schema to manage all the User[Customer, Seller]
const userSchema = new Schema({


    first_name: {
        type: String
    },

    last_name: {
        type: String
    },

    profilePic: {
        type: ObjectId,
        ref: 'Icon'
    },

    role: {
        type: String,
        enum: ['User', 'Helper']
    },

    email_id: {
        type: String
    },

    phone_code: {
        type: String,
        required: true,
        default: '+91'
    },

    phone_number: {
        type: String,
        unique: true,
        required: true
    },

    address: {
        type: ObjectId,
        ref: "address"
    },

    active: {
        type: String,
        enum: ['onilne', 'active']
    }

}, {
    runSettersOnQuery: true,

});



// userSchema.virtual('addresses', {
//     ref: 'Address',
//     localField: '_id',
//     foreignField: 'userId',
//     match: {
//         active: true
//     }
// });





/**
 * @type {Schema}
 */
module.exports = userSchema;