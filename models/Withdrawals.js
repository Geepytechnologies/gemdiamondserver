const mongoose = require('mongoose');


const WithdrawalSchema = new mongoose.Schema({
   userid: {
    type: String,
    required: true
   },
   amount: {
    type: String,
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
   },
   accno:{
      type: String,
   },
   accname:{
      type: String
   },
   accbank:{
      type: String
   }
},{timestamps: true})

module.exports = mongoose.model("withdrawals", WithdrawalSchema);