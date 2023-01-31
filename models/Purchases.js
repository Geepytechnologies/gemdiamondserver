const mongoose = require('mongoose');


const PurchasesSchema = new mongoose.Schema({
   userid: {
    type: String,
    required: true
   },
   packageid: {
     type: String,
     required: true
   },
   special: {
      type: String,
   },
   amount: {
    type: Number,
    required: true
   },
   period: {
    type: Number
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

module.exports = mongoose.model("purchases", PurchasesSchema);