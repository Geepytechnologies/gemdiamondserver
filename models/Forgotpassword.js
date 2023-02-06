const mongoose = require("mongoose");

const ForgotpasswordSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
    },
    reset: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("forgotpassword", ForgotpasswordSchema);
