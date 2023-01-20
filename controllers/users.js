const { createError } = require("../error.js")
const User = require("../models/User.js");


const update = async (req,res,next)=>{
    if(req.params.id === req.user.id){
        const amount = req.body.bonus;
      try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
          $inc: {referralbonus: amount},
          $push: {
            referral1: req.user.referral1,
            referral2: req.user.referral2,
            referral3: req.user.referral3,
        },
          $set: req.body,
        },{new: true});
        res.status(200);
      }catch(err){
        next(err);
      }
    }else{
        return next(createError(403, "Unauthorized"))
    }
}
const getUserById = async (req,res,next)=>{
   try{
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
   }catch(err){
    next(err);
   }
}
const getUserByProp = async (req,res,next)=>{
   try{
      const user = await User.findOne({referralid: req.body.refid});
      const { password, ...others } = user._doc;
      res.status(200).json(others);
   }catch(err){
    next(err);
   }
}

const getAllUsers = async (req,res,next)=>{
   try{
      const user = await User.find();
      res.status(200).json(user);
   }catch(err){
    next(err);
   }
}
const deleteUser = async (req,res,next)=>{
    if(req.params.id === req.user.id){
        try{
          await User.findByIdAndDelete(req.params.id,
         );
          res.status(200).json("user has been deleted");
        }catch(err){
          next(err);
        }
      }else{
          return next(createError(403, "Unauthorized Operation"))
      }
}

module.exports = {update, getUserById, getAllUsers,getUserByProp, deleteUser}