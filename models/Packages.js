const mongoose = require('mongoose');


const PackageSchema = new mongoose.Schema({
   price: {
    type: String,
    required: true
   },
   dailyIncome: {
    type: String,
    required: true
   },
   totalIncome: {
    type: String,
   },
   limit: {
    type: String
   }
},{timestamps: true})

module.exports = mongoose.model("Packages", PackageSchema);