const mongoose = require("mongoose");
const userSchema = require("./Schema");

userSchema.statics.search = function (id) {
    return this.findOne({ _id: id }).populate('address').lean().exec();

}
/**
 * @type {Model}
 */

module.exports = new mongoose.model("user", userSchema);
