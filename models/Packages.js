const mongoose = require('mongoose');


const PackageSchema = new mongoose.Schema({
   price: {
    type: Number,
    required: true
   },
   dailyIncome: {
    type: Number,
    required: true
   },
   totalIncome: {
    type: Number,
   },
   index:{
    type: Number,
    required: true
   },
   limit: {
    type: String
   }
},{timestamps: true})

module.exports = mongoose.model("Packages", PackageSchema);