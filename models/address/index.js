const mongoose = require("mongoose");
const addressSchema = require("./Schema");


/**
 * @type {Model}
 */

module.exports = new mongoose.model("address", addressSchema);