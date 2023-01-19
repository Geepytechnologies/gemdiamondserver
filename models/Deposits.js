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
   },
   initialized: {
    type: Boolean,
    default: true
 },
 completed: {
    type: Boolean,
    default: false
 }
},{timestamps: true})

module.exports = mongoose.model("deposits", DepositSchema);