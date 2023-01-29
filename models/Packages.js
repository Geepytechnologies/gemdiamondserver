const mongoose = require('mongoose');


const PackageSchema = new mongoose.Schema({
   price: {
    type: Number,
    required: true
   },
   dailyIncome: {
    type: Number,
   },
   totalIncome: {
    type: Number,
   },
   index:{
    type: Number,
    required: true
   },
   special:{
      type: Boolean,
   },
   limit: {
    type: String
   },
   period: {
      type: String
   },
   earned: {
      type: Boolean,
      default: false
   }
},{timestamps: true})

module.exports = mongoose.model("Packages", PackageSchema);