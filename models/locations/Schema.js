
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const locSchema = new Schema({

    userid: {
        type: String,
        required: true
    },

    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});
userSchema.index({
    location: '2dsphere'
});
/**
 * @type {Schema}
 */
module.exports = locSchema;