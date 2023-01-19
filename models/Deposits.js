const mongoose = require('mongoose');


const DepositSchema = new mongoose.Schema({
   userid: {
    type: String,
    required: true
   },
   packageid: {
     type: String,
     required: true
   },
   amount: {
    type: Number,
    required: true
   },
   currency: {
    type: String,
    default: "Naira"
   }
},{timestamps: true})

module.exports = mongoose.model("deposits", DepositSchema);