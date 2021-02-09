const mongoose = require("mongoose");
const locSchema = require("./Schema");



locSchema.statics.Update = function (id, coordinates) {

    this.findOneAndUpdate({ _id: id }, { location: [coordinates.lat, coordinates.lng] }, {
        new: true,
        upsert: true // Make this update into an upsert
    });

}
/**
 * @type {Model}
 */
module.exports = new mongoose.model("location", locSchema);