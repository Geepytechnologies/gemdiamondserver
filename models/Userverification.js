const mongoose = require("mongoose");

const UserverificationSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
    },
    uniquestring: {
      type: String,
    },
    expiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userverification", UserverificationSchema);
