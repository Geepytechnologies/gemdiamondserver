const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    referralid: {
        type: String,
    },
    referral1: {
        type: [String],
        default: []
    },
    referral2: {
        type: [String],
        default: []
    },
    referral3: {
        type: [String],
        default: []
    },
    referrer1: {
        type: String,
        default: ""
    },
    referrer2: {
         type: String,
         default: ""
    },
    referrer3: {
         type: String,
         default: ""
    },
    balance: {
        type: Number,
        default: 0,
    },
    referralbonus1: {
        type: Number,
        default: 0,
    },
    referralbonus2: {
        type: Number,
        default: 0,
    },
    referralbonus3: {
        type: Number,
        default: 0,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    currentpackage: {
        type: String,
    }
},{timestamps: true});

// export default mongoose.model("users", UserSchema);
module.exports = mongoose.model("users", UserSchema);