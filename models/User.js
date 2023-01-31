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
        type: [],
    },
    referral2: {
        type: [],
    },
    referral3: {
        type: [],
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
    lastincometime: {
        type: Date,
    },
    currentpackage: {
        packid: {
            type: String,
        },
        usage: {
            type: Number,
            default: 0
        }
    },
    currentspecialpackage: [
        {
          id: {
            type: String,
          },
          earned: {
            type: Boolean,
          },
          index: {
            type: Number
          }
        }
    ],
    currentpackageusage: {
        type: Number,
        default: 0
    }
},{timestamps: true});

// export default mongoose.model("users", UserSchema);
module.exports = mongoose.model("users", UserSchema);